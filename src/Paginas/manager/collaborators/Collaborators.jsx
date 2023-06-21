import React from 'react'
import Header from '../../../Components/header/Header';

import { useNavigate } from "react-router-dom";

 const Collaborators = () => {
    const navigation = useNavigate();

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
    
    
    
    </>
  )
}
export default Collaborators;