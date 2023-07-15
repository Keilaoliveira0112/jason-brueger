import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Main, Filter, FilterTitle } from "./Products.styled";
import Header from "../../../Components/Header/Header";
import Select from "../../../Components/Select/Select";
import FormAdd from "../../../Components/FormAdd/FormAdd";
import Card from "../../../Components/Card/Card";
import Modal from "../../../Components/Modal/Modal";
import ModalUpdate from "../../../Components/ModalUpdate/ModalUpdate";
import getProducts from "../../../api/products/getProducts";
import createProduct from "../../../api/products/postProducts";
import deleteProducts from "../../../api/products/deleteProducts";
import patchProducts from "../../../api/products/patchProducts";
import pageRoute from "../../../router/pageRoute";

const Products = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [valueArguments, setvalueArguments] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [editingProduct, setEditingProduct] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
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
    const page = e.target.textContent === "Funcionários" ? pageRoute.collaborators : pageRoute.products;
    navigation(page);
  };

  const handleModalClosure = () => {
    setOpenModalUpdate(!openModalUpdate);
    setEditingProduct({});
  };

  const handleClickType = (e) => {
    e.preventDefault();
    const typeValue = e.target.textContent;
    setEditingProduct((prevState) => ({ ...prevState, type: typeValue }));
  };

  const handleClickSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const price = parseInt(e.target.elements[1].value, 10);
    setEditingProduct((prevState) => ({ ...prevState, name, price }));
    let errorMessage;
    if (!name) {
      errorMessage = "Informe um nome para o produto.";
    }
    if (!price || price <= 0) {
      errorMessage = "Informe um preço acima de 0.";
    }
    if (!editingProduct.type) {
      errorMessage = "Informe o tipo do produto.";
    }
    if (errorMessage) {
      setModalMessage(errorMessage);
      setTypeModal("warning");
      setOpenModal(true);
    } else if (!openModal) {
      setModalMessage("Confirma a criação do novo produto?");
      setTypeModal("confirmation");
      setOpenModal(true);
    }
  };

  const handleSubmitNewProduct = async () => {
    try {
      const response = await createProduct(editingProduct.name, editingProduct.price, editingProduct.type);
      const newProducts = [...products];
      newProducts.push(response);
      setProducts(newProducts);
      setModalMessage("Produto criado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      setEditingProduct({});
    } catch (error) {
      setModalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const handleClickDelete = async (product) => {
    try {
      if (!openModal) {
        setvalueArguments(product);
        setModalMessage("Tem certeza que deseja excluir esse produto?");
        setTypeModal("confirmation");
        setOpenModal(true);
      } else {
        await deleteProducts(product);
        setModalMessage("Produto deletado com sucesso");
        setTypeModal("sucess");
        setOpenModal(true);
        setTimeout(() => { setOpenModal(false); }, 3000);
        const getElementFirst = products.findIndex((prod) => prod.id === valueArguments.id);
        const newProduct = [...products];
        newProduct.splice(getElementFirst, 1);
        setProducts(newProduct);
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
      case "Confirma a criação do novo produto?":
        handleSubmitNewProduct();
        break;
      case "Tem certeza que deseja excluir esse produto?":
        handleClickDelete(valueArguments);
        break;
      default:
        handleSubmitNewProduct();
    }
  };

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    callCorrectFunction();
  };

  const handleClickEdit = (product) => {
    setEditingProduct(product);
    setOpenModalUpdate(true);
  };

  const sendEditedData = async () => {
    try {
      await patchProducts(editingProduct.id, {
        name: editingProduct.name,
        type: editingProduct.type,
        price: editingProduct.price,
      });
      setOpenModalUpdate(false);
      setModalMessage("Produto atualizado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false); }, 3000);
      const getIndexElementFirst = products.findIndex((product) => product.id === editingProduct.id);
      const newProduct = [...products];
      newProduct.splice(getIndexElementFirst, 1);
      setProducts([...newProduct, editingProduct].sort((a, b) => a.id - b.id));
      setEditingProduct({});
    } catch (error) {
      setModalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const handleSubmitEditProduct = (e) => {
    e.preventDefault();
    const name = e.target.elements[0].value;
    const price = parseInt(e.target.elements[1].value, 10);
    setEditingProduct((prevState) => (
      {
        ...prevState,
        name,
        price,
      }));
    let errorMessage;
    if (!name) {
      errorMessage = "Informe um nome para o produto.";
    }
    if (!price || price <= 0) {
      errorMessage = "Informe um preço acima de 0.";
    }
    if (!editingProduct.type) {
      errorMessage = "Informe o tipo do produto.";
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
        label: "Nome do Produto:",
        type: "text",
        name: "name",
        placeholder: "Nome do Produto",
        value: editingProduct.name,
        onChange: (e) => setEditingProduct((prevState) => ({ ...prevState, name: e.target.value })),
      },
      {
        label: "Preço:",
        min: 0,
        type: "number",
        name: "price",
        placeholder: "Preço",
        value: editingProduct.price,
        onChange: (e) => setEditingProduct((prevState) => ({ ...prevState, price: e.target.value })),
      },
    ],
    labelButton: "Selecione o tipo:",
    buttons: ["Café da Manhã", "Hamburguers", "Acompanhamentos", "Bebidas"],
  };

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
            onSubmit={handleClickSubmit}
            onClick={handleClickType}
            optionsForm={optionsForm}
            childrenBtn="Criar Produto"
          />
        ) : (
          <Card
            isProductList
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
          setModalOpen={handleModalClosure}
          onSubmit={handleSubmitEditProduct}
          onClickForm={handleClickType}
          optionsForm={optionsForm}
          childrenBtn="Atualizar cadastro"
        />
      </Main>
    </>
  );
};

export default Products;
