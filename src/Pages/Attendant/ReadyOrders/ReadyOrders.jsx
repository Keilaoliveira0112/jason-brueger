import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./ReadyOrders.styled";
import Header from "../../../Components/Header/Header";
import Order from "../../../Components/Order/Order";
import Modal from "../../../Components/Modal/Modal";
import getOrders from "../../../api/orders/getOrders";
import patchOrders from "../../../api/orders/patchOrders";
import path from "../../../router/path";

const ReadyOrders = () => {
  const navigation = useNavigate();
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setmodalMessage] = useState("");
  const [valueArguments, setvalueArguments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrders();
        const filterPending = response.filter((order) => order.status === "ready");
        const newOrders = [...filterPending];
        const sortByHourAsc = newOrders.sort((a, b) => {
          return new Date(a.dataEntry) - new Date(b.dataEntry);
        });
        setOrders(sortByHourAsc);
      } catch (error) {
        setmodalMessage(error.message);
        setTypeModal("warning");
        setOpenModal(true);
      }
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === "Novo Pedido" ? path.newOrder : path.readyOrders;
    navigation(type);
  };

  const handleReadyOrder = async (idOrder) => {
    try {
      if (!openModal) {
        setvalueArguments(idOrder);
        setmodalMessage("Deseja marcar o pedido como entregue?");
        setTypeModal("confirmation");
        setOpenModal(true);
      } else {
        await patchOrders(valueArguments, "delivered");
        setmodalMessage("Pedido enviado com sucesso");
        setTypeModal("sucess");
        setOpenModal(true);
        setTimeout(() => { setOpenModal(false); }, 3000);
        const getIndex = orders.findIndex((order) => order.id === valueArguments);
        const newOrder = [...orders];
        newOrder.splice(getIndex, 1);
        setOrders(newOrder);
      }
    } catch (error) {
      setmodalMessage(error.message);
      setTypeModal("warning");
      setOpenModal(true);
    }
  };

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    handleReadyOrder();
  };

  return (
    <>
      <Header
        firstBtn="Novo Pedido"
        variantFirstBtn="quinary"
        secondBtn="Pedidos Prontos"
        variantSecondBtn=""
        onClick={handleClickNavigate}
      />
      <Main>
        <Order
          page="Pedidos Prontos"
          orders={orders}
          onClick={handleReadyOrder}
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

export default ReadyOrders;
