import Header from "../../../Components/header/Header";

import Star from '../../../assets/Star.svg';
import Cross from '../../../assets/Cross.svg';
import { useNavigate } from "react-router-dom";


const DeliveredOrders = () => {
    const navigation = useNavigate();

    const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Pedidos Pendentes' ? '/pedidos-pendentes' : '/pedidos-entregues';
    navigation(type);
  }
  return (
    <>
      <Header
        firstBtn='Pedidos Pendentes'
        variantFirstBtn=''
        secondBtn='Pedidos Entregues'
        variantSecondBtn='quinary'
        onClick={handleClickNavigate}  
      />
      <section>
        <h1>Resumo da Lápide</h1>
        <img src={Star} alt='Estrela que indica a hora do pedido'/>
        <p>19:31</p>
        <img src={Cross} alt='Cruz que indica a hora em que o pedido foi entregue' />
         <p>20:45</p>
        <h4>Cova: </h4>
        <p>001</p>
        <h4>Cliente: </h4>
        <p>Manuela</p>
        <h4>Atendente: </h4>
        <p>Samara </p>
       
       
                 
      </section>

    </>
  )
}

export default DeliveredOrders;