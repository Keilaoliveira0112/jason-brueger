import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Header from "../../../Components/header/Header";
import Order from "../../../Components/order/Order";
import Main from "./CompletedOrders.styled";
import getOrders from "../../../API/orders/getOrders";
import Modal from "../../../Components/modal/Modal";

const CompletedOrders = () => {
  const navigation = useNavigate();
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState("");
  const [modalMessage, setmodalMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOrders();
        const filterDelivered = response.filter((order) => order.status === "ready");
        setOrders(filterDelivered);
      } catch (error) {
        setmodalMessage(error.message);
        setTypeModal("warning");
        setOpenModal(true);
      }
    };
    fetchData();
  }, []);

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === "Pedidos Pendentes" ? "/pedidos-pendentes" : "/pedidos-concluídos";
    navigation(type);
  };

  return (
    <>
      <Header
        firstBtn="Pedidos Pendentes"
        variantFirstBtn="quinary"
        secondBtn="Pedidos Concluídos"
        variantSecondBtn=""
        onClick={handleClickNavigate}
      />
      <Main>
        <Order
          page="Pedidos Concluídos"
          orders={orders}
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

export default CompletedOrders;
