import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "./PendingOrders.styled";
import Header from "../../../Components/Header/Header";
import Order from "../../../Components/Order/Order";
import Modal from "../../../Components/Modal/Modal";
import getOrders from "../../../api/orders/getOrders";
import patchOrders from "../../../api/orders/patchOrders";
import pageRoute from "../../../router/pageRoute";

const PendingOrdes = () => {
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
        const filterPending = response.filter((order) => order.status === "pending");
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
    const page = e.target.textContent === "Pedidos Concluídos" ? pageRoute.completedOrders : pageRoute.pendingOrders;
    navigation(page);
  };

  const handleReadyOrder = async (idOrder) => {
    try {
      if (!openModal) {
        setvalueArguments(idOrder);
        setmodalMessage("Tem certeza que deseja marcar esse pedido como concluído?");
        setTypeModal("confirmation");
        setOpenModal(true);
      } else {
        await patchOrders(valueArguments, "ready");
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
        firstBtn="Pedidos Pendentes"
        variantFirstBtn=""
        secondBtn="Pedidos Concluídos"
        variantSecondBtn="quinary"
        onClick={handleClickNavigate}
      />
      <Main>
        <Order
          page="Pedidos Pendentes"
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

export default PendingOrdes;
