import {React, useState } from 'react'
import Header from '../../../Components/header/Header';
import FilterCollaborators from '../../../Components/filterCollaborators/FilterCollaborators';
import UserList from '../../../Components/userList/UserList';
import { Filter, Section } from './Collaborators.styles';
import { useNavigate } from "react-router-dom";

 const Collaborators = () => {
    const navigation = useNavigate();
    const [clientName] = useState('');
    const [email] = useState('');
    const [office] = useState('');

    const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === 'Colaboradores' ? '/colaboradores' : '/colaboradores';
    navigation(page);
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
        <Section>
            <Filter>Filtro:</Filter>
            <FilterCollaborators />
        </Section>
        <UserList
            orderItem={email}
            clientNameValue={clientName}
            valueEmail={email}
            valueOffice={office}
        />
    
    
    </>
  )
}
export default Collaborators;