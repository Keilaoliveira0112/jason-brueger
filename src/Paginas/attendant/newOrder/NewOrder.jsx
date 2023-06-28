import { React, useState, useEffect } from "react";
import Header from "../../../Components/header/Header";
import ContainerButtons from "../../../Components/containerButtons/ContainerButtons";
import List from "../../../Components/list/List";
import Select from "../../../Components/select/Select";
import Input from "../../../Components/input/Input";
import OrderResume from "../../../Components/orderResume/OrderResume";
import { Main, SectionMenu, TitleMenu, UlMenu } from "./NewOrder.styles";
import { getProducts } from "../../../API/products/getProducts";
import { createOrder } from "../../../API/orders/orders";
import { useNavigate } from "react-router-dom";
import Modal from "../../../Components/modal/Modal";

const NewOrder = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [selectValue, setSelectValue] = useState("");
  const [clientName, setName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setmodalMessage] = useState("");
  const [valueArguments, setvalueArguments] = useState([]);
  const [productType, setProductType] = useState("Breakfast");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      }
      catch (error) {
        setmodalMessage(error.message);
        setTypeModal("warning");
        setOpenModal(true);
      };
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === "Novo Pedido" ? "/novo-pedido" : "/pedidos-prontos";
    navigation(page);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const type = e.target.textContent === "Resto do dia" ? "RestOfTheDay" : "Breakfast";
    setProductType(type);
  };

  const handleClickDelete = (item) => {
    if (!openModal) {
      setvalueArguments(item)
      setmodalMessage(`Tem certeza que deseja excluir esse item do resumo de pedidos?`);
      setTypeModal("confirmation");
      setOpenModal(true);
    } else {
      const getIndex = orderItem.findIndex((order) => order.id === valueArguments.id);
      const newOrder = [...orderItem];
      newOrder.splice(getIndex, 1);
      setOrderItem(newOrder);
    };
  };

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    callCorrectFunction();
  };

  const callCorrectFunction = () => {
    switch (modalMessage) {
      case "Tem certeza que deseja excluir esse item do resumo de pedidos?":
        handleClickDelete();
        break;
      case "Confirma o envio do pedido para a cozinha?":
        handleSendOrder();
        break;
      default:
        handleClickDelete();
    };
  };

  const handleClickQuantity = (item, children) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    if (children === "-") {
      if (item.quantity <= 1) {
        handleClickDelete(item);
      } else {
        const specificItem = newOrder[getIndex];
        const valueChange = specificItem.quantity - 1;
        newOrder[getIndex].quantity = valueChange;
        setOrderItem(newOrder);
      };
    };
    if (children === "+") {
      const specificItem = newOrder[getIndex];
      const quantityChange = specificItem.quantity + 1;
      newOrder[getIndex].quantity = quantityChange;
      setOrderItem(newOrder);
    };
  };

  const handleAddItems = (product) => {
    if (orderItem.length === 0) {
      return setOrderItem((prevState) => [...prevState, product]);
    };
    const verification = orderItem.find(prod => prod.id === product.id);
    if (!verification) {
      return setOrderItem((prevState) => [...prevState, product]);
    };
    setmodalMessage(`Produto já foi adicionado no resumo! Caso queira alterar a quantidade, usar os botões no resumo do pedido`);
    setTypeModal("warning");
    setOpenModal(true);
  };

  const totalOrderAmount = () => {
    return orderItem.reduce((accum, valorAtual) => {
      return accum + (valorAtual.price * valorAtual.quantity);
    }, 0);
  };

  const handleSendOrder = async (orderTotal) => {
    try {
      if (orderItem.length <= 0) {
        throw new Error(`Não é possível enviar pedido caso o resumo esteja vazio!`);
      }
      if (clientName === "") {
        throw new Error(`Não é possível enviar pedido caso não digite o nome do cliente!`);
      }
      if (selectValue === "" || selectValue === "Cova") {
        throw new Error(`Não é possível enviar pedido caso não informe a mesa do cliente!`);
      }
      if (!openModal) {
        setvalueArguments(orderTotal);
        setmodalMessage(`Confirma o envio do pedido para a cozinha?`);
        setTypeModal("confirmation");
        return setOpenModal(true);
      }
      await createOrder(valueArguments, selectValue, orderItem, clientName);
      setmodalMessage("Pedido enviado com sucesso");
      setTypeModal("sucess");
      setOpenModal(true);
      setTimeout(() => { setOpenModal(false) }, 3000);
      setOrderItem([]);
      setName("");
      setSelectValue("");
    }
    catch (error) {
      setmodalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    };
  };

  return (
    <>
      <Header
        firstBtn="Novo Pedido"
        variantFirstBtn=""
        secondBtn="Pedidos Prontos"
        variantSecondBtn="quinary"
        onClick={handleClickNavigate}
      />
      <Main>
        <SectionMenu>
          {productType === "RestOfTheDay" ? (
            <ContainerButtons
              variantBtnOne="tertiary"
              variantBtnTwo="secondary"
              onClickBtnOne={handleClick}
              childrenBtnTwo="Resto do dia"
              childrenBtnOne="Café da manhã"
            />
          ) : (
            <ContainerButtons
              variantBtnOne="secondary"
              variantBtnTwo="tertiary"
              onClickBtnTwo={handleClick}
              childrenBtnTwo="Resto do dia"
              childrenBtnOne="Café da manhã"
            />
          )}
          <Input
            type="text"
            value={clientName}
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Digite o nome do cliente"
          />
          <Select
            onChange={(e) => setSelectValue(e.target.value)}
            defaultValue="Cova"
            optionValues={["001", "002", "003", "004"]}
          />
          {productType === "RestOfTheDay" ? (
            <>
              <TitleMenu>Hamburguers</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Hamburguers" &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => handleAddItems(product)}
                    />
                })}
              </UlMenu>
              <TitleMenu>Acompanhamentos</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Acompanhamentos" &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => setOrderItem((prevState) => [...prevState, product])}
                    />
                })}
              </UlMenu>
              <TitleMenu>Bebidas</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Bebidas" &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => setOrderItem((prevState) => [...prevState, product])}
                    />
                })}
              </UlMenu>
            </>
          ) : (
            <>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Café da manhã" &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => handleAddItems(product)}
                    />
                })}
              </UlMenu>
            </>
          )}
        </SectionMenu>
        <OrderResume
          orderItem={orderItem}
          selectValue={selectValue}
          clientNameValue={clientName}
          onClickDelete={handleClickDelete}
          onClickQuantity={handleClickQuantity}
          total={totalOrderAmount()}
          onClickSend={handleSendOrder}
        />
        <Modal
          isOpen={openModal}
          typeModal={typeModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
          send={sendModal}
        />
      </Main>
    </>
  );
};

export default NewOrder;