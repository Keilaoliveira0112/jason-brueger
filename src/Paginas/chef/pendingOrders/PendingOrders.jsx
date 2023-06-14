import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import Star from '../../../assets/Star.svg';
import Button from '../../../Components/button/Button';
import { getItem } from '../../../storage/local';
import { getOrders } from '../../../API/orders/getOrders';
import Modal from '../../../Components/modal/Modal';
import { Main, Section, Title, InitialDate, Hour, Pit, Number, Client, Name, Attendant, Username, Table,Thead, Tbody } from './PendingOrders.styled';
import { useNavigate } from "react-router-dom";
import { patchOrders } from '../../../API/orders/patchOrders';

const PendingOrdes = () => {
  const navigation = useNavigate();
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setmodalMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getItem('token');
        const response = await getOrders(token);

        if (!response.ok){
          throw new Error(`${response.status}: Erro ao carregar os pedidos!`);
        }

        const orderList = await response.json();
        console.log('lista de pedidos', orderList)
        const filterPending = orderList.filter((order) => order.status === 'pending');
        setOrders(filterPending);
      }
      catch (error) {
        setmodalMessage(error.message);
        setOpenModal(true);
      }
    };
    fetchData()
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === 'Pedidos Entregues' ? '/pedidos-entregues' : '/pedidos-pendentes';
    navigation(page);
  }

  const handleReadyOrder = async (order, idOrder) => {
    try{
      console.log('oi', order);
      console.log(idOrder)
      console.log('pedidos pendentes', orders)
      //poderá ter um modal de confirmação se a pessoa aperta cancelar irá exibir um erro de envio.
      const token = localStorage.getItem('token');
      const response = await patchOrders(token, idOrder)
      console.log(response)

      const teste = await response.json();
      console.log(teste);
      if(response.status >= 400) {
        throw new Error(`${response.status}: Erro ao marcar como pronto! Tente novamente!`);
      }

    }
    catch (error) {
      setmodalMessage(error.message);
      setOpenModal(true);
    }
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
      <Main>
        {orders.map((order) => {
          
          return <Section key={order.id}>
            {/* {console.log(order)} */}
            <Title>Resumo da Lápide</Title>
            <InitialDate src={Star} alt='Estrela que indica a hora do pedido'/>
            <Hour>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</Hour>
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
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                  </tr> 
                ))}
              </Tbody>
            </Table>          
            <Button variant='senary' onClick={() => handleReadyOrder(order, order.id)}>Entregar</Button>
          </Section>  
        })}
        <Modal 
          isOpen={openModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      </Main>
    </>
  )
}

export default PendingOrdes;