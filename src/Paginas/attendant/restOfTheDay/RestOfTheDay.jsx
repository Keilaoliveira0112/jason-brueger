import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import List from '../../../Components/list/List';
import Select from '../../../Components/select/Select';
import { Main, SectionMenu, TitleMenu, UlMenu, OrderResume } from './RestOfTheDay.styled';
import { getProducts } from '../../../API/products/products';
import { useNavigate } from "react-router-dom";

const RestOfTheDay = () => {
  const [products, setProducts] = useState([]);
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
            <Select />
            <TitleMenu>Hamburguers</TitleMenu>
            <UlMenu>
              {products.map((product) => {
                /* console.log('map ', product.name); */
                return <List name={product.name} price={`R$${product.price}`}/>
              })}                   
            </UlMenu>
            <TitleMenu>Acompanhamentos</TitleMenu>
            <TitleMenu>Bebidas</TitleMenu>
          </SectionMenu>
          <OrderResume>
            <h1>Resumo da Lápide</h1>
            <p>Cova:</p>
            <p>Hora:</p>
            <h3>Total: R$</h3>
          </OrderResume>
        </Main>
        
      </> 
    )
}

export default RestOfTheDay;