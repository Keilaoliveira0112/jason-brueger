import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Select from "../../../Components/select/Select";
import FormAdd from "../../../Components/formAdd/FormAdd";
import Card from "../../../Components/card/Card";
import Modal from "../../../Components/modal/Modal";
import ModalUpdate from "../../../Components/modalUpdate/ModalUpdate";
import { Main, Filter, FilterTitle } from "./Collaborators.styles";
import getUsers from "../../../API/users/getUsers";
import patchUser from "../../../API/users/patchUser";
import deleteUser from "../../../API/users/deleteUsers";
import createUsers from "../../../API/users/postUsers";

const Collaborators = () => {
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [valueArguments, setvalueArguments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setmodalMessage] = useState("");
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [editingUser, SetEditingUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        setmodalMessage(error.message);
        setTypeModal("warning");
        setOpenModal(true);
      }
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === "Produtos" ? "/produtos" : "/colaboradores";
    navigation(page);
  };

  const handleModalClosure = () => {
    setOpenModalUpdate(!openModalUpdate);
    SetEditingUser({});
  };

  const handleSubmit = (e) => {
    let errorMessage;
    e.preventDefault();
    if (!editingUser.name) {
      errorMessage = "Informe um nome colaborador.";
    }
    if (!editingUser.email) {
      errorMessage = "Informe o email do colaborador.";
    }
    if (!editingUser.password || editingUser.password.length < 6) {
      errorMessage = "Senha deve ser maior ou igual que 6 caracteres.";
    }
    if (!editingUser.role) {
      errorMessage = "Informe a função do colaborador";
    }
    if (errorMessage) {
      setmodalMessage(errorMessage);
      setTypeModal("warning");
      setOpenModal(true);
    } else if (!openModal) {
      setmodalMessage("Confirma o novo cadastro?");
      setTypeModal("confirmation");
      setOpenModal(true);
    }
  };

  const handleSubmitNewCollaborators = async () => {
    try {
      const response = await createUsers(editingUser.name, editingUser.email, editingUser.password, editingUser.role);
      const newUsers = [...users];
      newUsers.push(response.user);
      setUsers(newUsers);
      setmodalMessage("Cadastro criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      SetEditingUser({});
    } catch (error) {
      setmodalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const handleClickDelete = async (usersId) => {
    try {
      if (!openModal) {
        setvalueArguments(usersId);
        setmodalMessage("Tem certeza que deseja excluir este cadastro?");
        setTypeModal("confirmation");
        setOpenModal(true);
      } else {
        await deleteUser(usersId);
        setmodalMessage("Cadastro deletado com sucesso");
        setTypeModal("sucess");
        setOpenModal(true);
        setTimeout(() => { setOpenModal(false); }, 3000);
        const getFirstElement = users.findIndex((user) => user.id === usersId);
        const newUsers = [...users];
        newUsers.splice(getFirstElement, 1);
        setUsers(newUsers);
        setvalueArguments([]);
      }
    } catch (error) {
      setmodalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const callCorrectFunction = () => {
    switch (modalMessage) {
      case "Confirma o novo cadastro?":
        handleSubmitNewCollaborators();
        break;
      case "Tem certeza que deseja excluir este cadastro?":
        handleClickDelete(valueArguments);
        break;
      default:
        handleSubmitNewCollaborators();
    }
  };

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    callCorrectFunction();
  };

  const handleClickRole = (e) => {
    e.preventDefault();
    const roleValue = e.target.textContent;
    const convertingLowerCase = roleValue.toLowerCase();
    SetEditingUser((prevState) => ({ ...prevState, role: convertingLowerCase }));
  };

  const handleClickEdit = (user) => {
    SetEditingUser(user);
    setOpenModalUpdate(true);
  };

  const handleSubmitEditCollaborators = async (e) => {
    e.preventDefault();
    try {
      if (!editingUser.name) {
        throw new Error("Informe um nome colaborador.");
      }
      if (!editingUser.email) {
        throw new Error("Informe o email do colaborador.");
      }
      if (!editingUser.password || editingUser.password.length < 6) {
        throw new Error("Senha deve ser maior ou igual que 6 caracteres.");
      }
      if (!editingUser.role) {
        throw new Error("Informe a função do colaborador");
      }
      await patchUser(editingUser.id, {
        name: editingUser.name,
        email: editingUser.email,
        password: editingUser.password,
        role: editingUser.role,
      });
      setOpenModalUpdate(false);
      setmodalMessage("Cadastro atualizado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      const getIndexFirstElement = users.findIndex((user) => user.id === editingUser.id);
      const newUsers = [...users];
      newUsers.splice(getIndexFirstElement, 1);
      setUsers([...newUsers, editingUser].sort((a, b) => a.id - b.id));
      SetEditingUser({});
    } catch (error) {
      setmodalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  return (
    <>
      <Header
        firstBtn="Funcionários"
        variantFirstBtn=""
        secondBtn="Produtos"
        variantSecondBtn="quinary"
        onClick={handleClickNavigate}
      />
      <Main>
        <Filter>
          <FilterTitle>Filtro:</FilterTitle>
          <Select
            onChange={(e) => setSelectValue(e.target.value)}
            defaultValue="Escolha um Filtro"
            optionValues={["Lista de funcionários", "Cadastrar novo funcionário"]}
            variant="primary"
          />
        </Filter>
        {selectValue === "Cadastrar novo funcionário" ? (
          <FormAdd
            isProductForm={false}
            onSubmit={handleSubmit}
            name={editingUser.name}
            onChangeName={(e) => SetEditingUser((prevState) => ({ ...prevState, name: e.target.value }))}
            email={editingUser.email}
            onChangeEmail={(e) => SetEditingUser((prevState) => ({ ...prevState, email: e.target.value }))}
            password={editingUser.password}
            onChangePassword={(e) => SetEditingUser((prevState) => ({ ...prevState, password: e.target.value }))}
            onClick={handleClickRole}
            childrenBtn="Criar Cadastro"
          />
        ) : (
          <Card
            isProductList={false}
            values={users}
            onClickEdit={handleClickEdit}
            onClickDelete={handleClickDelete}
          />
        )}
        <Modal
          isOpen={openModal}
          typeModal={typeModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
          send={sendModal}
        />
        <ModalUpdate
          isOpen={openModalUpdate}
          onSubmit={handleSubmitEditCollaborators}
          setModalOpen={handleModalClosure}
          isProductForm={false}
          name={editingUser.name}
          onChangeName={(e) => SetEditingUser((prevState) => ({ ...prevState, name: e.target.value }))}
          email={editingUser.email}
          onChangeEmail={(e) => SetEditingUser((prevState) => ({ ...prevState, email: e.target.value }))}
          password={editingUser.password}
          onChangePassword={(e) => SetEditingUser((prevState) => ({ ...prevState, password: e.target.value }))}
          onClick={handleClickRole}
          childrenBtn="Atualizar cadastro"
        />
      </Main>
    </>
  );
};
export default Collaborators;
