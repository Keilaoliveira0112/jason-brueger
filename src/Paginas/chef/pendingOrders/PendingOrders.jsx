import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import Star from '../../../assets/Star.svg';
import Button from '../../../Components/button/Button';
import { getItem } from '../../../storage/local';
import { getOrders } from '../../../API/orders/getOrders';
import { Main, Section, Title, InitialDate, Hour, Pit, Number, Client, Name, Attendant, Username, Table,Thead, Tbody } from './PendingOrders.styled';

const PendingOrdes = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getItem('token');
        const response = await getOrders(token);

        if (!response.ok){
          throw new Error(`${response.status}: Erro ao carregar os pedidos!`);
        }

        const orderList = await response.json();
        const filterPending = orderList.filter((order) => order.status === 'Pendente');
        setOrders(filterPending);
      }
      catch (error) {
        alert(error.message);
      }
    };
    fetchData()
  }, []);

  return (
    <>
      <Header 
        firstBtn='Pedidos Pendentes'
        variantFirstBtn=''
        secondBtn='Pedidos Entregues'
        variantSecondBtn='quinary'  
      />
      <Main>
        {orders.map((order) => {
          
          return <Section>
            {console.log(order.products)}
            <Title>Resumo da Lápide</Title>
            <InitialDate src={Star} alt='Estrela que indica a hora do pedido'/>
            <Hour>{order.dataEntry}</Hour>
            <Pit>Cova: </Pit>
            <Number>{order.table}</Number>
            <Client>Cliente: </Client>
            <Name>{order.client}</Name>
            <Attendant>Atendente: </Attendant>
            <Username>{order.userName} </Username>         
            <Table>
              <Thead>
                <tr>
                  <th>Pedido</th>
                  <th>Quant.</th>
                </tr>
              </Thead>
              <Tbody>          
                {order.products.map((item)=> (
                  <tr>
                    <td>{item.product.name}</td>
                    <td>{item.product.quantity}</td>
                  </tr> 
                ))}
              </Tbody>
            </Table>
            
            <Button variant='senary'>Entregar</Button>
          </Section>  
        })}
      </Main>
    </>
  )
}

export default PendingOrdes;