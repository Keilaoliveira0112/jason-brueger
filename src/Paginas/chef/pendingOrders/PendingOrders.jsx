import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import Star from '../../../assets/Star.svg';
import Button from '../../../Components/button/Button';
import { getOrders } from '../../../API/orders/getOrders';
import Modal from '../../../Components/modal/Modal';
import Table from '../../../Components/table/Table'
import { Main, Section, Title, InitialDate, ImgDate, ValueOrder, PitNumber, Topic, ClientName, AttendantName } from './PendingOrders.styled';
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
        const response = await getOrders();
        const filterPending = response.filter((order) => order.status === 'pending');
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
      await patchOrders(valueArguments)
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
          
          return <Section key={order.id}>
            <Title>Resumo da Lápide</Title>
            <InitialDate>
              <ImgDate src={Star} alt='Estrela que indica a hora do pedido'/>
              <ValueOrder>{`${order.dataEntry.slice(11, 13)}h${order.dataEntry.slice(14, 16)}min`}</ValueOrder>
            </InitialDate>
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
              variant="ColorRed"
            />             
            <Button variant='senary' onClick={() => handleReadyOrder(order.id)}>Pronto</Button>
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