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

  const handleClickDelete = (item) => {
    //pegar o item
    //console.log('item.id', item.id);
    //pegar o que esta no resumo
    //console.log('orderItem', orderItem)
    //comparar o item selecionado e item que está no resumo
    //const filterItem = orderItem.filter((order) => order.id === item.id)
    //console.log('teste', filterItem);

    //tenho que saber o index, onde esta?
    //pega o objeto com o index desejado
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    console.log('getIndex', getIndex);
    //pegar o resumo e fazer a copia antes da alteração no state
    const newOrder = [...orderItem];
    console.log('newOrder', newOrder);
    //splice, primeiro localiza pelo index e o 1 quer dizer você quer modificar/remover
    newOrder.splice(getIndex, 1);
    console.log('splice', newOrder);;
    //atualizar o estado do orderItem 
    setOrderItem(newOrder);
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
                return <List 
                key={product.id} 
                name={product.name} 
                price={`R$${product.price}`} 
                onClick={() => setOrderItem((prevState) => [...prevState, product])}
                />
              })}           
            </UlMenu>
            <TitleMenu>Acompanhamentos</TitleMenu>
            <TitleMenu>Bebidas</TitleMenu>
          </SectionMenu>
          <OrderResume orderItem={orderItem} selectValue={selectValue} onClick={handleClickDelete}/>
        </Main>
        
      </> 
    )
}

export default RestOfTheDay;