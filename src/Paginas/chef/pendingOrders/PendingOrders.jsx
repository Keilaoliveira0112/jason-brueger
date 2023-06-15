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
  const [typeModal, setTypeModal] = useState('notification');
  const [modalMessage, setmodalMessage] = useState('');
  const [valueArguments, setvalueArguments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getItem('token');
        const response = await getOrders(token);

        if (!response.ok){
          throw new Error(`${response.status}: Erro ao carregar os pedidos!`);
        }

        const orderList = await response.json();
        const filterPending = orderList.filter((order) => order.status === 'pending');
        const newOrders = [...filterPending];
        const sortByHourAsc = newOrders.sort((a,b) => {
          return new Date(a.dataEntry) - new Date(b.dataEntry);
        });
        setOrders(sortByHourAsc);
      }
      catch (error) {
        setmodalMessage(error.message);
        setTypeModal('warning');
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

  const sendModal = (e) => {
    e.preventDefault();
    setOpenModal(false);
    handleReadyOrder()
  }

  const handleReadyOrder = async (idOrder) => {
    try{
      if(!openModal){
        //console.log(idOrder)
        setvalueArguments(idOrder)
        setmodalMessage(`Tem certeza que deseja marcar esse pedido como concluído?`);
        setTypeModal('confirmation');
        return setOpenModal(true);
      }
      //console.log(idOrder)
      //console.log('va', valueArguments)
      const token = localStorage.getItem('token');
      const response = await patchOrders(token, valueArguments)
      console.log('response', response)
      const teste = await response.json();
      console.log('teste', teste);
      if(response.status >= 400) {
        throw new Error(`${response.status}: Erro no envio para atendente! Tente novamente!`);
      }
      setmodalMessage('Pedido enviado com sucesso');
      setTypeModal('sucess');
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
      //deletar do array o pedido enviado com sucesso
      const getIndex = orders.findIndex((order) => order.id === valueArguments);
      const newOrder = [...orders];
      newOrder.splice(getIndex, 1);
      setOrders(newOrder);
    }
    catch (error) {
      setmodalMessage(error.message);
      setTypeModal('warning');
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
           {/*  {console.log('cada pedido', order)} */}
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
            <Button variant='senary' onClick={() => handleReadyOrder(order.id)}>Concluído</Button>
          </Section>  
        })}
        <Modal 
          isOpen={openModal}
          typeModal={typeModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
          send={sendModal}
        />
      </Main>
    </>
  )
}

export default PendingOrdes;