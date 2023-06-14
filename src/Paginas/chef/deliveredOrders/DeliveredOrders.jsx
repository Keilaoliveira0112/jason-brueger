import Header from "../../../Components/header/Header";
import { Main, Section, Pit, Title, Number, Client, Name, Attendant, Username, Hour, Date } from '../../../Paginas/chef/deliveredOrders/DeliveredOrders.styled';
import Star from '../../../assets/Star.svg';
import Cross from '../../../assets/Cross.svg';

import { useNavigate } from "react-router-dom";
import { React } from "react";



const DeliveredOrders = () => {
    const navigation = useNavigate();
    //const [orders, setOrders] = useState([]);

    const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Pedidos Pendentes' ? '/pedidos-pendentes' : '/pedidos-entregues';
    navigation(type);
  }
  return (
    <>
      <Header
        firstBtn='Pedidos Pendentes'
        variantFirstBtn='quinary'
        secondBtn='Pedidos Entregues'
        variantSecondBtn=''
        onClick={handleClickNavigate}  
      />
      <Main>
       
      <Section>
        <Title>Resumo da Lápide</Title>
        <Date src={Star} alt='Estrela que indica a hora do pedido'/>
        <Hour></Hour>
        <Date src={Cross} alt='Cruz que indica a hora em que o pedido foi entregue' />
         <p>20:45</p>
        <Pit>Cova: </Pit>
        <Number></Number>
        <Client>Cliente: </Client>
        <Name>Manuela</Name>
        <Attendant>Atendente: </Attendant>
        <Username>Samara </Username>
       
       
                 
       </Section>
     
     </Main>

    </>
  )
}

export default DeliveredOrders;