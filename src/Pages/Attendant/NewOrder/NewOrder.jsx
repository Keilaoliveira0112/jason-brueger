import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import {
  Main,
  SectionMenu,
  TitleMenu,
  UlMenu,
} from "./NewOrder.styled";
import Header from "../../../Components/Header/Header";
import ContainerButtons from "../../../Components/ContainerButtons/ContainerButtons";
import List from "../../../Components/List/List";
import Select from "../../../Components/Select/Select";
import Input from "../../../Components/Input/Input";
import OrderResume from "../../../Components/OrderResume/OrderResume";
import Modal from "../../../Components/Modal/Modal";
import getProducts from "../../../api/products/getProducts";
import createOrder from "../../../api/orders/orders";
import pageRoute from "../../../router/pageRoute";

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
  const [timeOfDay, setTimeOfDay] = useState("Breakfast");

  const openSuccessModal = (message) => {
    setmodalMessage(message);
    setTypeModal("sucess");
    setOpenModal(true);
    setTimeout(() => { setOpenModal(false); }, 3000);
  };

  const openWarningModal = (message) => {
    setmodalMessage(message);
    setTypeModal("warning");
    setOpenModal(true);
  };

  const openConfirmationModal = (message) => {
    setmodalMessage(message);
    setTypeModal("confirmation");
    setOpenModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        openWarningModal(error.message);
      }
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === "Novo Pedido" ? pageRoute.newOrder : pageRoute.readyOrders;
    navigation(page);
  };

  const handleClickProductType = (e) => {
    e.preventDefault();
    const type = e.target.textContent === "Café da manhã" ? "Breakfast" : "RestOfTheDay";
    setTimeOfDay(type);
  };

  const handleClickDelete = (item) => {
    if (!openModal) {
      setvalueArguments(item);
      openConfirmationModal("Tem certeza que deseja excluir esse item do resumo de pedidos?");
    } else {
      const getIndex = orderItem.findIndex((order) => order.id === valueArguments.id);
      const newOrder = [...orderItem];
      newOrder.splice(getIndex, 1);
      setOrderItem(newOrder);
    }
  };

  const handleSendOrder = async (orderTotal) => {
    try {
      if (orderItem.length <= 0) {
        throw new Error("Não é possível enviar pedido caso o resumo esteja vazio!");
      }
      if (clientName === "") {
        throw new Error("Não é possível enviar pedido caso não digite o nome do cliente!");
      }
      if (selectValue === "" || selectValue === "Cova") {
        throw new Error("Não é possível enviar pedido caso não informe a mesa do cliente!");
      }
      if (!openModal) {
        setvalueArguments(orderTotal);
        openConfirmationModal("Confirma o envio do pedido para a cozinha?");
      } else {
        await createOrder(valueArguments, selectValue, orderItem, clientName);
        openSuccessModal("Pedido enviado com sucesso");
        setOrderItem([]);
        setName("");
        setSelectValue("");
      }
    } catch (error) {
      openWarningModal(error.message);
    }
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
    }
  };

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    callCorrectFunction();
  };

  const handleClickQuantity = (item, children) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    const specificItem = newOrder[getIndex];
    if (children === "-") {
      if (item.quantity <= 1) {
        handleClickDelete(item);
      } else {
        newOrder[getIndex].quantity = specificItem.quantity - 1;
      }
    }
    if (children === "+") {
      newOrder[getIndex].quantity = specificItem.quantity + 1;
    }
    setOrderItem(newOrder);
  };

  const handleAddItems = (product) => {
    if (orderItem.length === 0) {
      setOrderItem((prevState) => [...prevState, product]);
    } else {
      const verification = orderItem.find((prod) => prod.id === product.id);
      if (!verification) {
        setOrderItem((prevState) => [...prevState, product]);
      } else {
        openWarningModal("Produto já foi adicionado no resumo! Caso queira alterar a quantidade, usar os botões no resumo do pedido");
      }
    }
  };

  const totalOrderAmount = () => {
    return orderItem.reduce((accum, valorAtual) => {
      return accum + (valorAtual.price * valorAtual.quantity);
    }, 0);
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
          <ContainerButtons
            variantBtnOne={timeOfDay === "Breakfast" ? "secondary" : "tertiary"}
            variantBtnTwo={timeOfDay === "RestOfTheDay" ? "secondary" : "tertiary"}
            onClickBtnOne={handleClickProductType}
            onClickBtnTwo={handleClickProductType}
            childrenBtnOne="Café da manhã"
            childrenBtnTwo="Resto do dia"
          />
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
          {timeOfDay === "RestOfTheDay" ? (
            <>
              <TitleMenu>Hamburguers</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Hamburguers"
                    && (
                      <List
                        key={product.id}
                        name={product.name}
                        price={`R$${product.price}`}
                        onClick={() => handleAddItems(product)}
                      />
                    );
                })}
              </UlMenu>
              <TitleMenu>Acompanhamentos</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Acompanhamentos"
                    && (
                      <List
                        key={product.id}
                        name={product.name}
                        price={`R$${product.price}`}
                        onClick={() => handleAddItems(product)}
                      />
                    );
                })}
              </UlMenu>
              <TitleMenu>Bebidas</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === "Bebidas"
                    && (
                      <List
                        key={product.id}
                        name={product.name}
                        price={`R$${product.price}`}
                        onClick={() => handleAddItems(product)}
                      />
                    );
                })}
              </UlMenu>
            </>
          ) : (
            <UlMenu>
              {products.map((product) => {
                return product.type === "Café da manhã"
                  && (
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => handleAddItems(product)}
                    />
                  );
              })}
            </UlMenu>
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
