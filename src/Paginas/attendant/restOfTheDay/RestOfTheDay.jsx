import { React, useState, useEffect } from 'react';
import Header from '../../../Components/header/Header';
import Button from '../../../Components/button/Button';
import List from '../../../Components/list/List';
import { Main, ContainerButtons, Select, SectionMenu, TitleMenu, UlMenu, OrderResume } from './RestOfTheDay.styled';
import { getProducts } from '../../../API/products/products';
import { useNavigate } from "react-router-dom";

const RestOfTheDay = () => {
  const [products, setProducts] = useState([]);

  //nos ajuda a buscar todos os itens na primeira renderização;
  //o que significa que quando o componente é montado ou renderizado novamente
  //ele obtém todos os nossos dados do localStorage
  useEffect(() => {
    const fetchData = async () => {
      //navegador
      const token = localStorage.getItem('token');
      /* console.log('token', token); */
      const response = await getProducts(token);
      /* console.log('response', response); */
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
            <ContainerButtons>
            <Button type='button' variant='terciary' onClick={handleClick} children='Café da Manhã' />
            <Button type='button' variant='secundary' children='Resto do Dia' />
            </ContainerButtons>
            <Select>
              <option disabled selected>Cova</option>
              <option value="Cova1">Cova 1</option>
              <option value="Cova2">Cova 2</option>
              <option value="Cova3">Cova 3</option>
              <option value="Cova4">Cova 4</option>
            </Select>
            <TitleMenu>Hamburguers</TitleMenu>
            <UlMenu>
              {products.map((product) => {
                /* console.log('map ', product.name); */
                return <List name={product.name} price={`R$${product.price}`}/>
              })}
                    
            </UlMenu>
            <TitleMenu>Acompanhamentos</TitleMenu>
            <UlMenu>
              {/* <List name={'Batata Frita'} price={'R$ 5'}/>
              <List name={'Anéis de Cebola'} price={'R$ 5'}/> */}
            </UlMenu>
            <TitleMenu>Bebidas</TitleMenu>
            <UlMenu>
              {/* <List name={'Água 500ml'} price={'R$ 5'}/>
              <List name={'Água 750ml'} price={'R$ 7'}/>
              <List name={'Bebida gaseificada 500ml'} price={'R$ 7'}/>
              <List name={'Bebida gaseificada 750ml'} price={'R$ 10'}/> */}
            </UlMenu>
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