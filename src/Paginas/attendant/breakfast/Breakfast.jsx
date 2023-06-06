import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import Select from '../../../Components/select/Select';
import Input from '../../../Components/input/Input';
import List from '../../../Components/list/List';
import OrderResume from '../../../Components/orderResume/OrderResume';
import { Main, SectionMenu, UlMenu } from '../breakfast/Breakfast.styled';
import { getProducts } from '../../../API/products/products';
import { createOrder } from '../../../API/orders/orders';
import { useNavigate } from "react-router-dom";

const Breakfast = () => {
  const [products, setProducts] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [selectValue, setSelectValue] = useState('');
  const [clientName, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await getProducts(token);
        //console.log(response)
        
        if (!response.ok) {
          throw new Error(`Erro ao obter os produtos da API ${response.statusText}`);
        }
        
        const productsList = await response.json();
        setProducts(productsList)
      
      } 
      catch (error) {
        alert(error.message)
        console.log(error.message);
      };
    };
    fetchData();
  }, []);
  
  const navigation = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigation('/resto-do-dia');
  }
    
  const handleClickDelete = (item) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    newOrder.splice(getIndex, 1);
    setOrderItem(newOrder);
  }

  const handleClickQuantity = (item, children) => {
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    const newOrder = [...orderItem];
    if(children === '-'){
      if(item.quantity <= 1){
        handleClickDelete(item)
      }else{
        const specificItem = newOrder[getIndex];
        const valueChange = specificItem.quantity - 1;
        newOrder[getIndex].quantity = valueChange;
        setOrderItem(newOrder);
      }
    }
    if(children === '+'){
      const specificItem = newOrder[getIndex];
      const valueChange = specificItem.quantity + 1;
      newOrder[getIndex].quantity = valueChange;
      setOrderItem(newOrder);
    }
  }

  const addItems = (product) => {
    if(orderItem.length === 0){
      //console.log('entrei')
      return setOrderItem((prevState) => [...prevState, product])
    }
    const verification = orderItem.find(prod => prod.id === product.id);
    //console.log(verification)
    if(!verification){
      return setOrderItem((prevState) => [...prevState, product])
    }
    alert('item já está adicionado! Se quiser alterar a quantidade usar os botões do resumo do pedido')
  }

  //funão total do pedido
  const totalOrderAmount = () => {
    //reduce -> metodos de array
    //recebe 2 pararmetros, função callback e acumulador(amarzenador de infos)
    //função callback recebe dois parametros -> acumulador e valor atual
    //acumulador -> valores add nas interações
    //valor atual será o item atual pecorrido no array
    //sempre retornar o accumulador 

    return  orderItem.reduce((accum, currentValue) => {
      return accum + (currentValue.price * currentValue.quantity);
    }, 0);
  }

  const handleSendOrder = async () => {
    try {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      //console.log(userId);
      
      //tratamento de erro para quando não enviar pedido sem nenhum pedido
      if(orderItem.length <= 0){
        throw new Error(`Não é possível enviar pedido caso o resumo esteja vazio!`);
      }
      if(clientName === ''){
        throw new Error(`Não é possível enviar pedido caso não digite o nome do cliente!`);
      }
      const response = await createOrder(orderItem, clientName, userId, token); 
      //console.log(response)
      const orderData = await response.json();
      console.log(orderData);
      alert('Pedido enviado com sucesso')
      //mensagem de enviado com sucesso com tempo(pode ser um modal)
      
    } 
    catch (error) {
      alert(error.message)
      console.log(error.message);
    };
  };

  return (
    <>
      <Header />      
      <Main>
        <SectionMenu>
          <ContainerButtons bntBreakfast='secundary' btnRestOfTheDay='terciary' onClickDay={handleClick} />
          <Input 
            type='text'
            value={clientName}
            onChange={(e) => setName(e.target.value)}
            name='name'
            placeholder='Digite o nome do cliente'
          />
          <Select onChange={(e) => setSelectValue(e.target.value)}/>   
          <UlMenu>
          {products.map((product) => {
            return product.type === 'Café da manhã' &&
            <List 
            key={product.id} 
            name={product.name} 
            price={`R$${product.price}`} 
            onClick={() => addItems(product)}
            />
          })}             
          </UlMenu>    
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
      </Main>
    </>
  )
}

export default Breakfast;
