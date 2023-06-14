import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import List from '../../../Components/list/List';
import Select from '../../../Components/select/Select';
import Input from '../../../Components/input/Input';
import OrderResume from '../../../Components/orderResume/OrderResume';
import { Main, SectionMenu, TitleMenu, UlMenu } from './NewOrder.styles';
import { getProducts } from '../../../API/products/products';
import { createOrder } from '../../../API/orders/orders';
import { useNavigate } from "react-router-dom";
import Modal from '../../../Components/modal/Modal';

const NewOrder = () => {
  const navigation = useNavigate();
  const [products, setProducts] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const [clientName, setName] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setmodalMessage] = useState('');
  const [productType, setProductType] = useState('Breakfast');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getProducts(token);

        if (!response.ok) {
          throw new Error(`Erro ao obter os produtos da API ${response.statusText}`);
        }

        const productsList = await response.json();
        setProducts(productsList);

      }
      catch (error) {
        setmodalMessage(error.message);
        setOpenModal(true);
      };
    };
    fetchData();
  }, []);

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const page = e.target.textContent === 'Novo Pedido' ? '/novo-pedido' : '/pedidos-prontos';
    navigation(page);
  }

  const handleClick = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Resto do dia' ? 'RestOfTheDay' : 'Breakfast';
    setProductType(type);
  };

  const handleClickDelete = (item) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    newOrder.splice(getIndex, 1);
    setOrderItem(newOrder);
  }

  const handleClickQuantity = (item, children) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    if (children === '-') {
      if (item.quantity <= 1) {
        handleClickDelete(item);
      } else {
        const specificItem = newOrder[getIndex];
        const valueChange = specificItem.quantity - 1;
        newOrder[getIndex].quantity = valueChange;
        setOrderItem(newOrder);
      }
    }
    if (children === '+') {
      const specificItem = newOrder[getIndex];
      const quantityChange = specificItem.quantity + 1;
      newOrder[getIndex].quantity = quantityChange;
      setOrderItem(newOrder);
    }
  }

  const handleAddItems = (product) => {
    if (orderItem.length === 0) {
      return setOrderItem((prevState) => [...prevState, product]);
    }
    const verification = orderItem.find(prod => prod.id === product.id);
    if (!verification) {
      return setOrderItem((prevState) => [...prevState, product]);
    }
    setmodalMessage(`Produto já foi adicionado no resumo! Caso queira alterar a quantidade, usar os botões no resumo do pedido`);
    setOpenModal(true);
  }

  const totalOrderAmount = () => {
    return orderItem.reduce((accum, valorAtual) => {
      return accum + (valorAtual.price * valorAtual.quantity);
    }, 0);
  }

  const handleSendOrder = async (orderTotal) => {
    try {
      const token = localStorage.getItem('token');
      const username = localStorage.getItem('username');

      if (orderItem.length <= 0) {
        throw new Error(`Não é possível enviar pedido caso o resumo esteja vazio!`);
      }
      if (clientName === '') {
        throw new Error(`Não é possível enviar pedido caso não digite o nome do cliente!`);
      }
      if(selectValue === '' || selectValue === 'Cova'){
        throw new Error(`Não é possível enviar pedido caso não informe a mesa do cliente!`);
      }
      const response = await createOrder(orderTotal, selectValue, orderItem, clientName, username, token);

      const teste = await response.json();
      console.log(teste)
      if(response.status === 201){
        setmodalMessage('Pedido enviado com sucesso');
        setOpenModal(true);
        setOrderItem([]);
        setSelectValue('');
        setName('');
      } else {
        throw new Error('Erro ao enviar o pedido')
      }
    }
    catch (error) {
      setmodalMessage(error.message);
      setOpenModal(true);
    };
  };

  return (
    <>
      <Header 
        firstBtn='Novo Pedido'
        variantFirstBtn=''
        secondBtn='Pedidos Prontos'
        variantSecondBtn='quinary'
        onClick={handleClickNavigate}
      />
      <Main>
        <SectionMenu>
          {productType === 'RestOfTheDay' ? (
            <ContainerButtons bntBreakfast='tertiary' btnRestOfTheDay='secondary' onClickBreakfast={handleClick} />
          ) : (
            <ContainerButtons bntBreakfast='secondary' btnRestOfTheDay='tertiary' onClickDay={handleClick} />
          )}          
          <Input
            type='text'
            value={clientName}
            onChange={(e) => setName(e.target.value)}
            name='name'
            placeholder='Digite o nome do cliente'
          />
          <Select onChange={(e) => setSelectValue(e.target.value)} />
          {productType === 'RestOfTheDay' ? (
            <>
              <TitleMenu>Hamburguers</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === 'Hamburguers' &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => handleAddItems(product)}
                    />
                })}
              </UlMenu>
              <TitleMenu>Acompanhamentos</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === 'Acompanhamentos' &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => setOrderItem((prevState) => [...prevState, product])}
                    />
                })}
              </UlMenu>
              <TitleMenu>Bebidas</TitleMenu>
              <UlMenu>
                {products.map((product) => {
                  return product.type === 'Bebidas' &&
                    <List
                      key={product.id}
                      name={product.name}
                      price={`R$${product.price}`}
                      onClick={() => setOrderItem((prevState) => [...prevState, product])}
                    />
                })}
              </UlMenu>
            </>
          ) : (
            <>
              <UlMenu>
                {products.map((product) => {
                  return product.type === 'Café da manhã' &&
                  <List 
                    key={product.id} 
                    name={product.name} 
                    price={`R$${product.price}`} 
                    onClick={() => handleAddItems(product)}
                  />
                })}
              </UlMenu>
            </> 
          )}
        </SectionMenu>
        <OrderResume
          orderItem={orderItem}
          selectValue={selectValue}
          clientNameValue={clientName}
          onClickDelete={handleClickDelete}
          onClickQuantity={handleClickQuantity}
          total={totalOrderAmount()}
          onClickSend={handleSendOrder}
        />
        <Modal 
          isOpen={openModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
        />
      </Main>

    </>
  )
}

export default NewOrder;