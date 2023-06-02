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
      try {
        const token = localStorage.getItem('token');
        const response = await getProducts(token);
        console.log(response)
        
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
    navigation('/breakfast');
  };

  const handleClickDelete = (item) => {
    //tenho que saber o index, onde esta?
    //pega o objeto com o index desejado
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    //console.log('getIndex', getIndex);

    //pegar o resumo e fazer a copia antes da alteração no state
    const newOrder = [...orderItem];
    //console.log('newOrder', newOrder);

    //splice, primeiro localiza pelo index e o 1 quer dizer você quer modificar/remover
    newOrder.splice(getIndex, 1);
    //console.log('splice', newOrder);;

    //atualizar o estado do orderItem 
    setOrderItem(newOrder);
  }
    
  // fazer função do botão mais e menos;
  const handleClickQuantity = (item, children) => {
    //identificar o index para saber o item que quer aumentar/diminuir
    const getIndex = orderItem.findIndex((order) => order.id === item.id);
    //console.log('getIndex', getIndex);
    //fazer uma cópia
    const newOrder = [...orderItem];
    //console.log('newOrder', newOrder);

    //pegar o valor da quantidade atual;
    //console.log('quantity', item.quantity)
    if(children === '-'){
      //caso ja seja 1 e queira diminuir, o item será removido
      if(item.quantity <= 1){
        handleClickDelete(item)
      }else{
        const specificItem = newOrder[getIndex];
        //console.log('specificItem', specificItem.quantity)
        const valueChange = specificItem.quantity - 1;
        newOrder[getIndex].quantity = valueChange;
        //console.log(newOrder)
        setOrderItem(newOrder);
      }    
        
    }
    if(children === '+'){
      const specificItem = newOrder[getIndex];
      const quantityChange = specificItem.quantity + 1;
      newOrder[getIndex].quantity = quantityChange;
      //console.log('vc', valueChange);
      //console.log('no', newOrder);
      //console.log(newOrder[getIndex])
      setOrderItem(newOrder);
    }
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
                return product.type === 'Hamburguers' &&
                <List 
                key={product.id} 
                name={product.name} 
                price={`R$${product.price}`} 
                onClick={() => setOrderItem((prevState) => [...prevState, product])}
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

export default RestOfTheDay;