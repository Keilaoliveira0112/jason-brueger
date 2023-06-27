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
  const [modalMessage, setModalMessage] = useState("");
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  //const [price, setPrice] = useState();
  //const [name, setName] = useState("");
  //const [type, setType] = useState("");
  const [editingProduct, setEditingProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      }
      catch (error) {
        setModalMessage(error.message);
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
        //handleSubmitNewProduct()
    }
  }

  const handleOnChange = (e) => {
    console.log('aqui', e.target.value)
    setEditingProduct((prevState) => 
    ({...prevState,  name: e.target.value}))
    console.log(editingProduct);
  }

  const handleClickType = (e) => {
    e.preventDefault();
    const typeValue = e.target.textContent;
    setEditingProduct((prevState) => 
    ({...prevState,  type: typeValue}));
  }

  //lidar com envio do novo produto
  const handleSubmit = (e) => {
    let errorMessage; 
    e.preventDefault();
    if (editingProduct.name === "") {
      errorMessage = "Informe um nome para o produto."
    }
    if (editingProduct.price <= 0) {
      errorMessage = "Informe um preço acima de 0."
    }
    if (editingProduct.type === "") {
      errorMessage ="Informe o tipo do produto." 
    }
    if(errorMessage){
      setModalMessage(errorMessage)
      setTypeModal('warning');
      setOpenModal(true);
    }
    if(!openModal){
      setModalMessage("Confirma a criação do novo produto?");
      setTypeModal("confirmation");
      return setOpenModal(true);
    }
  } 

  const handleSubmitNewProduct = async () => {
    try {
      console.log(editingProduct)
      const response = await createProduct(editingProduct.name, editingProduct.price, editingProduct.type);
      console.log(response);
      const newProducts = [...products];
      newProducts.push(response);
      setProducts(newProducts);
      setModalMessage("Produto criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false) }, 3000);
      setEditingProduct({})
    }
    catch (error) {
      setModalMessage(error.message);
      setTypeModal('warning');
      setOpenModal(true);
    };
  }; 

  /* const handleSubmitNewProduct = async (e) => {
    e.preventDefault();
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
        setvalueArguments(e)
        setModalMessage("Confirma a criação do novo produto?");
        setTypeModal("confirmation");
        return setOpenModal(true);
      }
      const response = await createProduct(name, price, type);
      console.log(response);
      const newProducts = [...products];
      newProducts.push(response);
      setProducts(newProducts);
      setModalMessage("Produto criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
      setName("");
      setPrice(0);
      setType("");
    }
    catch (error) {
      setModalMessage(error.message);
      setTypeModal('warning');
      setOpenModal(true);
    };
  }; */

  //edit
  const handleClickEdit = (product) => {
    setEditingProduct(product);
    setOpenModalUpdate(true);
  }
  
  const handleSubmitEditProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct.name === "") {
        throw new Error("Informe um nome para o produto.");
      }
      if (editingProduct.price <= 0) {
        throw new Error("Informe um preço acima de 0.");
      }
      if (editingProduct.type.length <= 0) {
        throw new Error("Informe o tipo do produto.");
      }
      //console.log(editingProduct);
      const teste = await patchProducts(editingProduct.id, {name: editingProduct.name, type: editingProduct.type, price: editingProduct.price});
      console.log(teste);
      setOpenModalUpdate(false)
      setModalMessage("Produto atualizado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
      const getIndexElementFirst = products.findIndex((product) => product.id === editingProduct.id);
      const newProduct = [...products];
      newProduct.splice(getIndexElementFirst, 1);
      setProducts([...newProduct, editingProduct].sort((a,b) => a.id - b.id));
      setvalueArguments([]);
      setEditingProduct({});
    }
    catch (error) {
      setModalMessage(error.message);
      setTypeModal('warning');
      setOpenModal(true);
    };
  }

  //deletar produto
  const handleClickDelete = async (product) => {
    try {
      if(!openModal){
        setvalueArguments(product)
        setModalMessage(`Tem certeza que deseja excluir esse produto?`);
        setTypeModal('confirmation');
        return setOpenModal(true);
      } else {
        const teste = await deleteProducts(product);
        console.log(teste);
        setModalMessage("Produto deletado com sucesso");
        setTypeModal("sucess");
        setOpenModal(true);
        setTimeout(() => {setOpenModal(false)}, 3000);
        const getElementFirst = products.findIndex((product) => product.id === valueArguments.id);
        const newProduct = [...products];
        newProduct.splice(getElementFirst, 1);
        setProducts(newProduct);
        setvalueArguments([])
      }
    } 
    catch (error) {
      setModalMessage(error.message);
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
            onSubmit={handleSubmit}
            name={editingProduct.name}
            onChangeName={(e) => handleOnChange(e)}
            price={editingProduct.price}
            onChangePrice={(e) => setEditingProduct((prevState) => ({...prevState, price: e.target.value}))}
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
          name={editingProduct.name}
          onChangeName={(e) => setEditingProduct((prevState) => ({...prevState,  name: e.target.value}))}
          price={editingProduct.price}
          onChangePrice={(e) => setEditingProduct((prevState) => ({...prevState, price: e.target.value}))}
          type={handleClickType}
        />
      </Main>
    </>
  )
}

export default Products;