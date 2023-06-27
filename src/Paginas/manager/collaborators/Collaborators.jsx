import {React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../../../Components/header/Header';
import FilterCollaborators from '../../../Components/filterCollaborators/FilterCollaborators';
import UserList from '../../../Components/userList/UserList';
import Modal from "../../../Components/modal/Modal";
/* import FormAddUsers from "../../../Components/formAdd/FormAddUsers"; */
import FormAdd from '../../../Components/formAdd/FormAdd';
import ModalUpdate from '../../../Components/modalUpdate/ModalUpdate';
import { Main, Filter, FilterTitle } from './Collaborators.styles';
import { getUsers } from '../../../API/users/getUsers';
import { patchUser } from '../../../API/users/patchUser';
import { deleteUser } from '../../../API/users/deleteUsers';
import { createUsers } from '../../../API/users/postUsers';


const Collaborators = () => {
    const navigation = useNavigate();
    const [selectValue, setSelectValue] = useState("");
    const [users, setUsers] = useState([]);
    const [valueArguments, setvalueArguments] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [typeModal, setTypeModal] = useState('');
    const [modalMessage, setmodalMessage] = useState('');
    const [openModalUpdate, setOpenModalUpdate] = useState(false);
    /* const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState(""); */
    const [editingUser, SetEditingUser] = useState({});

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await getUsers();
            setUsers(response);
          }
          catch (error) {
            setmodalMessage(error.message);
            setTypeModal('warning');
            setOpenModal(true);
          };
        };
        fetchData();
      }, []);

        const handleClickNavigate = (e) => {
            e.preventDefault();
            const page = e.target.textContent === "Funcionários" ? "/colaboradores" : "/produtos";
            navigation(page);
        }

        const sendModal = (e) => {
            e.preventDefault();
            console.log(openModal)
            console.log(modalMessage)
            setOpenModal(false);
            callCorrectFunction()
        }
        

        const callCorrectFunction = () => {
          switch(modalMessage) {
            case "Confirma o novo cadastro?":
             handleSubmitNewCollaborators()
              break;
            case "Tem certeza que deseja excluir este cadastro?":
              handleClickDelete(valueArguments)
              break
            default:
              handleSubmitNewCollaborators()
         }
        }

         const handleClickRole = (e) => {
            e.preventDefault();
            const roleValue = e.target.textContent;
            console.log(roleValue);
           SetEditingUser((prevState) => ({...prevState, type: roleValue}))
         }
         const handleSubmit = (e) => {
            const lengthPassword = editingUser.password.length;
            console.log(lengthPassword)
            /* const lengthRole = editingUser.role.length;
            console.log(lengthRole) */
            let errorMessage;
            e.preventDefault();
              if (editingUser.name === "") {
                errorMessage = "Informe um nome colaborador.";
              }
              if (editingUser.email === "") {
                errorMessage = "Informe o email do colaborador.";
              }
              if (lengthPassword < 6 ) {
                errorMessage = "Senha deve ser maior ou igual que 6 caracteres.";
              } 
             /*  if (lengthRole <= 0) {
                errorMessage = "Informe a função do colaborador";
              } */
              if(errorMessage){
                setmodalMessage(errorMessage)
                setTypeModal('warning')
                return setOpenModal(true);
              }
              if(!openModal){
                
                setmodalMessage("Confirma o novo cadastro?");
                setTypeModal("confirmation");
                return setOpenModal(true);
            }
         }

         const handleSubmitNewCollaborators = async (e) => {
            try {
                        
              console.log(editingUser.role)
              const teste = await createUsers(editingUser.name, editingUser.email, editingUser.password, editingUser.role);
              console.log(teste);
              setmodalMessage("Cadastro criado com sucesso");
              setTypeModal("sucess");
              setOpenModal(true);
              setTimeout(() => {setOpenModal(false)}, 3000);
              SetEditingUser({});
             
            }
            catch (error) {
                setmodalMessage(error.message);
                setTypeModal('warning');
                setOpenModal(true);
             };
        };  

        const handleClickEdit = (users) => {
           /*  setvalueArguments(users);
            setName(users.name); 
            setEmail(users.email);
            setPassword(users.password);
            setRole(users.role); */
            SetEditingUser(users);
            setOpenModalUpdate(true);
        }
         const handleSubmitEditCollaborators = async (e) => {
            try {
              if (editingUser.name === "") {
                 throw new Error("Informe um nome colaborador.");
              }
              if (editingUser.email === "") {
                 throw new Error("Informe o email do colaborador.");
              }
              if (editingUser.password.length < 6 ) {
                throw new Error("Senha deve ser maior ou igual que 6 caracteres.");
              } 
              if (editingUser.role === "") {
                 throw new Error("Informe a função do colaborador");
              }
              e.preventDefault();
                
              const teste = await patchUser(editingUser.id, {name: editingUser.name, email: editingUser.email, password: editingUser.password, role: editingUser.role});
              console.log(teste);
              setOpenModalUpdate(false)
              setmodalMessage("Cadastro atualizado com sucesso");
              setTypeModal("sucess");
              setOpenModal(true);
              setTimeout(() => {setOpenModal(false)}, 3000);
              const getIndexFirstElement = users.findIndex((user) => user.id === editingUser.id );
              const newUsers = [...users];
              newUsers.splice(getIndexFirstElement, 1)
              setUsers([...newUsers, editingUser].sort((a,b) => a.id - b.id));
              SetEditingUser([]);             
            } catch (error) {
              setmodalMessage(error.message);
              setTypeModal('warning');
              setOpenModal(true);
            };
        }

        const handleClickDelete = async (usersId) => {
           try {
              if(!openModal){
                console.log(usersId)
                setvalueArguments(usersId)
                setmodalMessage(`Tem certeza que deseja excluir este cadastro?`);
                setTypeModal('confirmation');
                return setOpenModal(true);
              } else {
                console.log(usersId)
                const teste = await deleteUser(usersId);
                console.log(teste);
                setmodalMessage("Cadastro deletado com sucesso");
                setTypeModal("sucess");
                setOpenModal(true);
                setTimeout(() => {setOpenModal(false)}, 3000);
                const getFirstElement = users.findIndex((user) => user.id === usersId);
                const newUsers = [...users];
                newUsers.splice(getFirstElement, 1);
                setUsers(newUsers);
                setvalueArguments([])
             //falta o reload da tela para atualizar
              }
            } 
        catch (error) {
            setmodalMessage(error.message);
            setTypeModal('warning');
            setOpenModal(true);
        }
    }

    return (
    <>
        <Header 
            firstBtn='Funcionarios'
            variantFirstBtn=''
            secondBtn='Produtos'
            variantSecondBtn='quinary'
            onClick={handleClickNavigate}
        />
       <Main>
            <Filter>
             <FilterTitle>Filtro:</FilterTitle>
             <FilterCollaborators
                onChange={(e) => setSelectValue(e.target.value)} 
                defaultValue="Escolha um Filtro"
                optionValues={["Lista de funcionários", "Cadastrar novo funcionário"]}
                variant="primary"
             />
            </Filter>
            {selectValue === "Cadastrar novo funcionário" ? (
            <FormAdd
                form="users"
                onSubmit={handleSubmit}
                name={editingUser.name}
                onChangeName={(e) => SetEditingUser((prevState) => ({...prevState, name: e.target.value}))}
                email={editingUser.email}
                onChangeEmail={(e) => SetEditingUser((prevState) => ({...prevState, email: e.target.value}))}
                password={editingUser.password} 
                onChangePassword={(e) => SetEditingUser((prevState) => ({...prevState, password: e.target.value}))}  
                onClick={handleClickRole}
                childrenBtn="Criar Cadastro"
            />
         ) : (
            <UserList
                list="users"
                uservalue={users}
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
          setModalOpen={() => setOpenModalUpdate(!openModalUpdate)}
          form="users"
          name={editingUser.name}
          onChangeName={(e) => SetEditingUser((prevState) => ({...prevState, name: e.target.value}))}
          email={editingUser.email}
          onChangeEmail={(e) => SetEditingUser((prevState) => ({...prevState, email: e.target.value}))}
          password={editingUser.password}
          onChangePassword={(e) => SetEditingUser((prevState) => ({...prevState, password: e.target.value}))}
          onClick={handleClickRole}
          childrenBtn="Atualizar cadastro"
        />
        </Main>  
        
        
      
    
    </>
  )
}
export default Collaborators;