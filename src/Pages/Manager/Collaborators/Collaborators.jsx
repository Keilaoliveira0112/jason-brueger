import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Filter, FilterTitle } from "./Collaborators.styled";
import Header from "../../../Components/Header/Header";
import Select from "../../../Components/Select/Select";
import FormAdd from "../../../Components/FormAdd/FormAdd";
import Card from "../../../Components/Card/Card";
import Modal from "../../../Components/Modal/Modal";
import ModalUpdate from "../../../Components/ModalUpdate/ModalUpdate";
import getUsers from "../../../api/users/getUsers";
import patchUser from "../../../api/users/patchUser";
import deleteUser from "../../../api/users/deleteUsers";
import createUsers from "../../../api/users/postUsers";
import pageRoute from "../../../router/pageRoute";

const Collaborators = () => {
  const navigation = useNavigate();
  const [users, setUsers] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [valueArguments, setvalueArguments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [editingUser, SetEditingUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUsers();
        setUsers(response);
      } catch (error) {
        setModalMessage(error.message);
        setTypeModal("warning");
        setOpenModal(true);
      }
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === "Produtos" ? pageRoute.products : pageRoute.collaborators;
    navigation(page);
  };

  const handleModalClosure = () => {
    setOpenModalUpdate(!openModalUpdate);
    SetEditingUser({});
  };

  const handleSubmit = (e) => {
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    SetEditingUser((prevState) => (
      {
        ...prevState,
        name,
        email,
        password,
      }));
    let errorMessage;
    e.preventDefault();
    if (!name) {
      errorMessage = "Informe um nome colaborador.";
    }
    if (!email) {
      errorMessage = "Informe o email do colaborador.";
    }
    if (!password || password.length < 6) {
      errorMessage = "Senha deve ser maior ou igual que 6 caracteres.";
    }
    if (!editingUser.role) {
      errorMessage = "Informe a função do colaborador";
    }
    if (errorMessage) {
      setModalMessage(errorMessage);
      setTypeModal("warning");
      setOpenModal(true);
    } else if (!openModal) {
      setModalMessage("Confirma o novo cadastro?");
      setTypeModal("confirmation");
      setOpenModal(true);
    }
  };

  const sendDataNewCollaborators = async () => {
    try {
      const response = await createUsers(editingUser.name, editingUser.email, editingUser.password, editingUser.role);
      const newUsers = [...users];
      newUsers.push(response.user);
      setUsers(newUsers);
      setModalMessage("Cadastro criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      SetEditingUser({});
    } catch (error) {
      setModalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const handleClickDelete = async (usersId) => {
    try {
      if (!openModal) {
        setvalueArguments(usersId);
        setModalMessage("Tem certeza que deseja excluir este cadastro?");
        setTypeModal("confirmation");
        setOpenModal(true);
      } else {
        await deleteUser(usersId);
        setModalMessage("Cadastro deletado com sucesso");
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
      setModalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const callCorrectFunction = () => {
    switch (modalMessage) {
      case "Confirma o novo cadastro?":
        sendDataNewCollaborators();
        break;
      case "Tem certeza que deseja excluir este cadastro?":
        handleClickDelete(valueArguments);
        break;
      default:
        sendDataNewCollaborators();
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

  const sendEditedData = async () => {
    try {
      await patchUser(editingUser.id, {
        name: editingUser.name,
        email: editingUser.email,
        password: editingUser.password,
        role: editingUser.role,
      });
      setOpenModalUpdate(false);
      setModalMessage("Cadastro atualizado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      const getIndexFirstElement = users.findIndex((user) => user.id === editingUser.id);
      const newUsers = [...users];
      newUsers.splice(getIndexFirstElement, 1);
      setUsers([...newUsers, editingUser].sort((a, b) => a.id - b.id));
      SetEditingUser({});
    } catch (error) {
      setModalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const handleSubmitEditCollaborators = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const password = e.target.elements[2].value;
    SetEditingUser((prevState) => (
      {
        ...prevState,
        name,
        email,
        password,
      }));
    let errorMessage;
    if (!name) {
      errorMessage = "Informe um nome colaborador.";
    }
    if (!email) {
      errorMessage = "Informe o email do colaborador.";
    }
    if (!password || password.length < 6) {
      errorMessage = "Senha deve ser maior ou igual que 6 caracteres.";
    }
    if (password.length > 20) {
      errorMessage = "Senha deve ser menor que 20 caracteres.";
    }
    if (!editingUser.role) {
      errorMessage = "Informe a função do colaborador";
    }
    if (errorMessage) {
      setModalMessage(errorMessage);
      setTypeModal("warning");
      setOpenModal(true);
    } else {
      sendEditedData();
    }
  };

  const optionsForm = {
    inputLabel: [
      {
        label: "Nome:",
        type: "text",
        name: "name",
        placeholder: "Nome",
        value: editingUser.name,
        onChange: (e) => SetEditingUser((prevState) => ({ ...prevState, name: e.target.value })),
      },
      {
        label: "Email:",
        type: "email",
        name: "email",
        placeholder: "Email",
        value: editingUser.email,
        onChange: (e) => SetEditingUser((prevState) => ({ ...prevState, email: e.target.value })),
      },
      {
        label: "Senha:",
        type: "password",
        name: "password",
        placeholder: "Senha",
        value: editingUser.password,
        onChange: (e) => SetEditingUser((prevState) => ({ ...prevState, password: e.target.value })),
      },
    ],
    labelButton: "Selecione o cargo:",
    buttons: ["Atendente", "Chefe de Cozinha", "Admin"],
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
            onSubmit={handleSubmit}
            onClick={handleClickRole}
            optionsForm={optionsForm}
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
          setModalOpen={handleModalClosure}
          onSubmit={handleSubmitEditCollaborators}
          onClickForm={handleClickRole}
          optionsForm={optionsForm}
          childrenBtn="Atualizar cadastro"
        />
      </Main>
    </>
  );
};
export default Collaborators;
