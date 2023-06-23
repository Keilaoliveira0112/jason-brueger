import {React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../../../Components/header/Header';
import FilterCollaborators from '../../../Components/filterCollaborators/FilterCollaborators';
import UserList from '../../../Components/userList/UserList';
import Modal from "../../../Components/modal/Modal";
import FormAddUsers from "../../../Components/formAdd/FormAddUsers";
import { Main, Filter, FilterTitle } from './Collaborators.styles';
import { getUsers } from '../../../API/users/getUsers';


const Collaborators = () => {
    const navigation = useNavigate();
    const [selectValue, setSelectValue] = useState("");
    const [users, setUsers] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [typeModal, setTypeModal] = useState('');
    const [modalMessage, setmodalMessage] = useState('');

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
            const page = e.target.textContent === "Funcionários" ? '/colaboradores' : '/colaboradores';
            navigation(page);
        }

        const sendModal = (e) => {
            e.preventDefault();
            setOpenModal(false);
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
                optionValues={["Administrador", "Garçons", "Chef de Cozinha", "Cadastrar novo funcionário"]}
                variant="primary"
             />
            </Filter>
            {selectValue === "Cadastrar novo funcionário" ? (
            <FormAddUsers></FormAddUsers>
         ) : (
            <UserList
                list="users"
                uservalue={users}
            />
         )} 
         <Modal 
          isOpen={openModal}
          typeModal={typeModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
          send={sendModal}
         />
        </Main>  
        
        
      
    
    </>
  )
}
export default Collaborators;