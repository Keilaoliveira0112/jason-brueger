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
  const [typeModal, setTypeModal] = useState('notification');
  const [modalMessage, setmodalMessage] = useState('');
  const [valueArguments, setvalueArguments] = useState([]);
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
        setTypeModal('notification');
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
    if(!openModal){
      //console.log(item)
      setvalueArguments(item)
      setmodalMessage(`Tem certeza que deseja excluir esse item do resumo de pedidos?`);
      setTypeModal('confirmation');
      setOpenModal(true);
      //console.log('false', openModal)
    } else {
      //console.log(valueArguments);
      const getIndex = orderItem.findIndex((order) => order.id === valueArguments.id);
      const newOrder = [...orderItem];
      newOrder.splice(getIndex, 1);
      setOrderItem(newOrder);
    }
  };

  const sendModal = (e) => {
    e.preventDefault();
    //console.log('entre fi duma mae');
    //console.log('true', openModal)
    setOpenModal(false);
    callCorrectFunction()
  }

  const callCorrectFunction = () => {
    switch(modalMessage) {
      case "Tem certeza que deseja excluir esse item do resumo de pedidos?":
        handleClickDelete()
        break;
      case "Confirma o envio do pedido para a cozinha?":
        handleSendOrder()
        break
      default:
        console.log('nenhuma das anteriores')
    }
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
    setTypeModal('notification');
    setOpenModal(true);
  }

  const totalOrderAmount = () => {
    return orderItem.reduce((accum, valorAtual) => {
      return accum + (valorAtual.price * valorAtual.quantity);
    }, 0);
  }

  const handleSendOrder = async (orderTotal) => {
    if(!openModal){
      setvalueArguments(orderTotal)
      setmodalMessage(`Confirma o envio do pedido para a cozinha?`);
      setTypeModal('confirmation');
      setOpenModal(true);
    } else {
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
        const response = await createOrder(valueArguments, selectValue, orderItem, clientName, username, token);
  
        const teste = await response.json();
        console.log(teste)
        if(response.status === 201){
          setmodalMessage('Pedido enviado com sucesso');
          setTypeModal('notification');
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
        setTypeModal('notification');
        setOpenModal(true);
      };      
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
            <ContainerButtons
              variantBtnOne='tertiary'
              variantBtnTwo='secondary'
              onClickBtnOne={handleClick}
              childrenBtnTwo={'Resto do dia'}
              childrenBtnOne={'Café da manhã'}
            />
          ) : (
            <ContainerButtons
              variantBtnOne='secondary'
              variantBtnTwo='tertiary'
              onClickBtnTwo={handleClick}
              childrenBtnTwo={'Resto do dia'}
              childrenBtnOne={'Café da manhã'}
            />
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
          typeModal={typeModal}
          message={modalMessage}
          setModalOpen={() => setOpenModal(!openModal)}
          send={sendModal}
        />
      </Main>

    </>
  )
}

export default NewOrder;