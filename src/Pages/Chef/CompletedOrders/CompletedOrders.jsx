import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import Main from "./CompletedOrders.styled";
import Header from "../../../Components/Header/Header";
import Order from "../../../Components/Order/Order";
import Modal from "../../../Components/Modal/Modal";
import getOrders from "../../../api/orders/getOrders";
import pageRoute from "../../../router/pageRoute";

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
    const type = e.target.textContent === "Pedidos Pendentes" ? pageRoute.pendingOrders : pageRoute.completedOrders;
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
