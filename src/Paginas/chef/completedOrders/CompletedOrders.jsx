import Header from "../../../Components/header/Header";
import Order from '../../../Components/order/Order'
import { Main } from './CompletedOrders.styled';
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { getOrders } from "../../../API/orders/getOrders";

const CompletedOrders = () => {
    const navigation = useNavigate();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await getOrders();
        const filterDelivered = response.filter((order) => order.status === 'ready');
        console.log(filterDelivered)
        setOrders(filterDelivered);
      }
      catch (error) {
        setError(error.message);
      }
    };
    fetchData()
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Pedidos Pendentes' ? '/pedidos-pendentes' : '/pedidos-concluídos';
    navigation(type);
  }

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
          error={error}
        />
      </Main>
    </>
  )
}

export default CompletedOrders;