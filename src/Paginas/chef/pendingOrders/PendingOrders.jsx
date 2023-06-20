import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import Order from '../../../Components/order/Order';
import { getItem } from '../../../storage/local';
import { getOrders } from '../../../API/orders/getOrders';
import Modal from '../../../Components/modal/Modal';
import { Main } from './PendingOrders.styled';
import { useNavigate } from "react-router-dom";
import { patchOrders } from '../../../API/orders/patchOrders';

const PendingOrdes = () => {
  const navigation = useNavigate();
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [typeModal, setTypeModal] = useState('');
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
        setvalueArguments(idOrder)
        setmodalMessage(`Tem certeza que deseja marcar esse pedido como concluído?`);
        setTypeModal('confirmation');
        return setOpenModal(true);
      }
      const token = localStorage.getItem('token');
      const response = await patchOrders(token, valueArguments)
      await response.json();

      if(response.status >= 400) {
        throw new Error(`${response.status}: Erro no envio para atendente! Tente novamente!`);
      }
      setmodalMessage('Pedido enviado com sucesso');
      setTypeModal('sucess');
      setOpenModal(true);
      setTimeout(() => {setOpenModal(false)}, 3000);
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
            console.log(order)
         return <Order key={order.id}
           page='pendingOrders'
           orderResume={order}
           onClick={handleReadyOrder}
           />
          
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