import { React, useState, useEffect } from "react";
import Header from "../../../Components/header/Header";
import { Main, Section, Pit, Title, Number, Client, Name, Attendant, Username, Hour, DateOne, ParagraphError, Paragraph } from '../../../Paginas/chef/deliveredOrders/DeliveredOrders.styled';
import Star from '../../../assets/Star.svg';
import Cross from '../../../assets/Cross.svg';
import Table from "../../../Components/table/Table"; 
import { useNavigate } from "react-router-dom";

import { differenceInMinutes } from "date-fns";
import { getOrders } from "../../../API/orders/getOrders";
import { getItem } from '../../../storage/local';



const DeliveredOrders = () => {
    const navigation = useNavigate();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        
        const fetchData = async () => {
              try {
                const token = getItem('token');
                const response = await getOrders(token);
                

                if (!response.ok){
                    throw new Error(`${response.status}: Erro ao finalizar o pedido!`);
                }

                const orderList = await response.json();
                console.log('lista de pedidos', orderList)
                const filterDelivered = orderList.filter((order) => order.status === 'ready');
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
    const type = e.target.textContent === 'Pedidos Pendentes' ? '/pedidos-pendentes' : '/pedidos-entregues';
    navigation(type);
  }

   /*  const sortByDateTime = (a, b) => {
        console.log(a, b)
        // Converter os tempos para objetos Date
        const inicio = new Date(a);
        const fim = new Date(b);

        // Calcular a diferença em milissegundos
        const diferenca = fim.getTime() - inicio.getTime();

        // Converter a diferença para minutos
        const minutes = Math.floor(diferenca / (1000 * 60));

        return minutes;
    }; */

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
        {orders.map((order) => {
            console.log(order)
          return <Section key={order.id}>
            <Title>Resumo da Lápide</Title>
            <DateOne src={Star} alt='Estrela que indica a hora do pedido'/>
            <Hour>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</Hour> 
            <DateOne src={Cross} alt='Cruz que indica a hora em que o pedido foi entregue' />
            <p>20:45</p>
            <Pit>Cova: </Pit>
            <Number></Number>
            <Client>Cliente: </Client>
            <Name>{order.client}</Name>
            <Attendant>Atendente: </Attendant>
            <Username>{order.userName} </Username>
            <Table
             order={order.products}
            /> 
             <Paragraph>
             Concluído em {differenceInMinutes(new Date(order.dateProcessed),  new Date(order.dataEntry))} min(s)
            </Paragraph> 
         {error && <ParagraphError>{error}</ParagraphError>}          
        </Section>
      })} 
     </Main>
   
    </>
  )
}

export default DeliveredOrders;