import Header from "../../../Components/header/Header";
import { Main, Section, Title, InitialDate, ImgDate, ValueOrder, FinalDate, PitNumber, Topic, ClientName, AttendantName, ParagraphError, Paragraph } from './DeliveredOrders.styled';
import Star from '../../../assets/Star.svg';
import Cross from '../../../assets/Cross.svg';
import Table from "../../../Components/table/Table"; 
import { useNavigate } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { differenceInMinutes } from "date-fns";
import { getOrders } from "../../../API/orders/getOrders";

const DeliveredOrders = () => {
    const navigation = useNavigate();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {        
        const response = await getOrders();
        console.log(response)
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
      {orders.map((order) => {
          
          return <Section key={order.id}>
            <Title>Resumo da Lápide</Title>
            <InitialDate>
              <ImgDate src={Star} alt='Estrela que indica a hora do pedido'/>
              <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
            </InitialDate>
            <FinalDate>
              <ImgDate src={Cross} alt='Cruz que indica a hora em que o pedido foi concluído'/>
              <ValueOrder>{`${order.dateProcessed.slice(11, 13)}h${order.dateProcessed.slice(14, 16)}min`}</ValueOrder>
            </FinalDate>
            <PitNumber>
              <Topic>Cova: </Topic>
              <ValueOrder>{order.table}</ValueOrder>
            </PitNumber>  
            <ClientName>
              <Topic>Cliente: </Topic>
              <ValueOrder>{order.client}</ValueOrder>
            </ClientName>         
            <AttendantName>
              <Topic>Atendente: </Topic>
              <ValueOrder>{order.userName} </ValueOrder>   
            </AttendantName>                  
            <Table 
              products={order.products}
              variant="colorGreen"
            />
            <Paragraph>
              Concluído em {differenceInMinutes(new Date(order.dateProcessed), new Date(order.dataEntry))} min(s)
            </Paragraph>
            {error && <ParagraphError>{error}</ParagraphError>}            
          </Section>  
        })}
      </Main>

    </>
  )
}

export default DeliveredOrders;