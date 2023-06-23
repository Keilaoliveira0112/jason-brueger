import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Select from "../../../Components/select/Select";
import FormAdd from "../../../Components/formAdd/FormAdd";
import Modal from "../../../Components/modal/Modal";
import Card from "../../../Components/card/Card";
import { Main, Filter, FilterTitle } from "./Products.styled";
import { getProducts } from "../../../API/products/getProducts";


const Products = () => {
  const navigation = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
  const [modalMessage, setmodalMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
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
    setOpenModal(false);
  }

  return (
    <>
      <Header 
        firstBtn="Funcionários"
        variantFirstBtn="quinary"
        secondBtn="Produtos"
        variantSecondBtn=""
        onClick={handleClickNavigate}
      />
      <Main>
        <Filter>
         <FilterTitle>Filtro: </FilterTitle>
         <Select
           onChange={(e) => setSelectValue(e.target.value)} 
           defaultValue="Escolha um Filtro"
           optionValues={["Lista de Produtos", "Adicionar produtos"]}
           variant="primary"
          />
        </Filter>
        {selectValue === "Adicionar produtos" ? (
          <FormAdd></FormAdd>
        ) : (
          <Card 
            list="products"
            values={products}
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

export default Products;