import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../../Components/header/Header";
import Select from "../../../Components/select/Select";
import FormAdd from "../../../Components/formAdd/FormAdd";
import Modal from "../../../Components/modal/Modal";
import ModalUpdate from "../../../Components/modalUpdate/ModalUpdate"
import Card from "../../../Components/card/Card";
import { Main, Filter, FilterTitle } from "./Products.styled";
import { getProducts } from "../../../API/products/getProducts";
import { createProduct } from "../../../API/products/postProducts";
import { deleteProducts } from "../../../API/products/deleteProducts";
import { patchProducts } from "../../../API/products/patchProducts";

const Products = () => {
  const navigation = useNavigate();
  const [selectValue, setSelectValue] = useState("");
  const [products, setProducts] = useState([]);
  const [valueArguments, setvalueArguments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setmodalMessage] = useState("");
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [price, setPrice] = useState();
  const [name, setName] = useState("");
  const [type, setType] = useState("");

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
    callCorrectFunction()
  }

  const callCorrectFunction = () => {
    switch(modalMessage) {
      case "Confirma a criação do novo produto?":
        handleSubmitNewProduct()
        break;
      case "Tem certeza que deseja excluir esse produto?":
        handleClickDelete(valueArguments)
        break
      default:
        handleSubmitNewProduct()
    }
  }

  const handleClickType = (e) => {
    e.preventDefault();
    const typeValue = e.target.textContent;
    setType(typeValue)
  }

  //lidar com envio do novo produto
  const handleSubmitNewProduct = async (e) => {
    try {
      if (name === "") {
        throw new Error("Informe um nome para o produto.");
      }
      if (price <= 0) {
        throw new Error("Informe um preço acima de 0.");
      }
      if (type.length <= 0) {
        throw new Error("Informe o tipo do produto.");
      }
      if(!openModal){
        e.preventDefault();
        setmodalMessage("Confirma a criação do novo produto?");
        setTypeModal("confirmation");
        return setOpenModal(true);
      }
      const teste = await createProduct(name, price, type);
      console.log(teste);
      setmodalMessage("Produto criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
      setName("");
      setPrice();
      setType("");
    }
    catch (error) {
      setmodalMessage(error.message);
      setTypeModal('warning');
      setOpenModal(true);
    };
  };

  //edit
  const handleClickEdit = (product) => {
    setvalueArguments(product);
    setName(product.name);
    setPrice(product.price);
    setType(product.type);
    setOpenModalUpdate(true);
  }
  
  const handleSubmitEditProduct = async (e) => {
    try {
      if (name === "") {
        throw new Error("Informe um nome para o produto.");
      }
      if (price <= 0) {
        throw new Error("Informe um preço acima de 0.");
      }
      if (type.length <= 0) {
        throw new Error("Informe o tipo do produto.");
      }
      e.preventDefault();
      const teste = await patchProducts(valueArguments.id, name, price, type);
      console.log(teste);
      setOpenModalUpdate(false)
      setmodalMessage("Produto atualizado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
      setvalueArguments([]);
      setName("");
      setPrice();
      setType("");
    }
    catch (error) {
      setmodalMessage(error.message);
      setTypeModal('warning');
      setOpenModal(true);
    };
  }

  //deletar produto
  const handleClickDelete = async (product) => {
    try {
      if(!openModal){
        setvalueArguments(product)
        setmodalMessage(`Tem certeza que deseja excluir esse produto?`);
        setTypeModal('confirmation');
        return setOpenModal(true);
      } else {
        const teste = await deleteProducts(product);
        console.log(teste);
        setmodalMessage("Produto deletado com sucesso");
        setTypeModal("sucess");
        setOpenModal(true);
        setTimeout(() => {setOpenModal(false)}, 3000);
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
          <FormAdd
            onSubmit={handleSubmitNewProduct}
            name={name}
            onChangeName={(e) => setName(e.target.value)}
            price={price}
            onChangePrice={(e) => setPrice(e.target.value)}
            onClick={handleClickType}
            childrenBtn="Criar Produto"
          />
        ) : (
          <Card 
            list="products"
            values={products}
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
          onSubmit={handleSubmitEditProduct}
          setModalOpen={() => setOpenModalUpdate(!openModalUpdate)}
          name={name}
          onChangeName={(e) => setName(e.target.value)}
          price={price}
          onChangePrice={(e) => setPrice(e.target.value)}
          type={handleClickType}
        />
      </Main>
    </>
  )
}

export default Products;