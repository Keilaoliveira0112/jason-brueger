import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import List from '../../../Components/list/List';
import Select from '../../../Components/select/Select';
import OrderResume from '../../../Components/orderResume/OrderResume';
import { Main, SectionMenu, TitleMenu, UlMenu } from './RestOfTheDay.styled';
import { getProducts } from '../../../API/products/products';
import { useNavigate } from "react-router-dom";

const RestOfTheDay = () => {
  const [products, setProducts] = useState([]);
  const [orderItem, setOrderItem] = useState([]);
  //const para armazenar valor do select
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const response = await getProducts(token);
      const productsList = await response.json();
      setProducts(productsList);
    }
    fetchData();
  }, []);
  const navigation = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigation('/breakfast');
  }

    return (
      <>
        <Header />
        <Main>
          <SectionMenu>
            <ContainerButtons bntBreakfast='terciary' btnRestOfTheDay='secundary' onClickBreakfast={handleClick}/>
            <Select onChange={(e) => setSelectValue(e.target.value)}/>
            <TitleMenu>Hamburguers</TitleMenu>
            <UlMenu>
              {products.map((product) => {
                return <List key={product.id} name={product.name} price={`R$${product.price}`} onClick={() => setOrderItem((prevState) => [...prevState, product])}/>
              })}                   
            </UlMenu>
            <TitleMenu>Acompanhamentos</TitleMenu>
            <TitleMenu>Bebidas</TitleMenu>
          </SectionMenu>
          <OrderResume orderItem={orderItem} selectValue={selectValue}/>
        </Main>
        
      </> 
    )
}

export default RestOfTheDay;