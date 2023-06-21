import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Select from "../../../Components/select/Select";
import Modal from "../../../Components/modal/Modal";
import Card from "../../../Components/card/Card"
import { Filter, FilterTitle } from "./Products.styled";
import { getProducts } from "../../../API/products/products";

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
    const page = e.target.textContent === "Funcionários" ? "/novo-pedido" : "/produtos";
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
      <main>
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
          <form>
            <label for="name">Nome: </label>
            <input type="text" name="name" id="name" />
            <label for="price">Preço: </label>
            <input type="text" name="price" id="price" />
            <label for="type">Tipo: </label>
            <input type="radio" name="cafe_da_manha" id="cafe_da_manha" />
            <label for="cafe_da_manha">Café da Manhã</label><br></br>
            <input type="radio" name="hamburguers" id="hamburguers" />
            <label for="hamburguers">Hamburguers</label><br></br>
            <input type="radio" name="acompanhamentos" id="acompanhamentos" />
            <label for="acompanhamentos">Acompanhamentos</label><br></br>
            <input type="radio" name="bebidas" id="bebidas" />
            <label for="bebidas">Bebidas</label><br></br>
          </form>
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
      </main>
    </>
  )
}

export default Products;