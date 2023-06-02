import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import Select from '../../../Components/select/Select';
import List from '../../../Components/list/List';
import OrderResume from '../../../Components/orderResume/OrderResume';
import { Main, SectionMenu, UlMenu } from '../breakfast/Breakfast.styled';
import { getProducts } from '../../../API/products/products';
import { useNavigate } from "react-router-dom";

const Breakfast = () => {
  const [products, setProducts] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try{
        const token = localStorage.getItem('token');
        const response = await getProducts(token);
        if(response.status >= 400 && response.status <= 500) {
          //console.log(response);
         throw new Error(`${response.statusText}: Error ao carregar os produtos! Tente logar novamente no aplicativo.`);
        } 
        const productsList = await response.json();
        setProducts(productsList)
      }
      catch(error){
        console.log('error:', error)
        console.log('error message:', error.message)
        alert(error.message)
      }
      
    }
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

  return (
    <>
      <Header />      
      <Main>
        <SectionMenu>
          <ContainerButtons bntBreakfast='secundary' btnRestOfTheDay='terciary' onClickDay={handleClick} />
          <Select onChange={(e) => setSelectValue(e.target.value)}/>   
          <UlMenu>
          {products.map((product) => {
            return <List 
            key={product.id} 
            name={product.name} 
            price={`R$${product.price}`} 
            onClick={() => setOrderItem((prevState) => [...prevState, product])}
            />
          })}             
          </UlMenu>    
        </SectionMenu>
        <OrderResume 
          orderItem={orderItem}
          selectValue={selectValue} 
          onClick={handleClickDelete} 
          onClickQuantity={handleClickQuantity}
        /> 
      </Main>
      </>
  )
}

export default Breakfast;
