import List from '../../../Components/list/List';
import OrderResume from '../../../Components/orderResume/OrderResume';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import Select from '../../../Components/select/Select';
import { Main, SectionMenu, UlMenu } from '../breakfast/Breakfast.styled';
import { React, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { getProducts } from '../../../API/products/products';


const Breakfast = () => {
    const [products, setProducts] = useState([]);
    const [orderItem, setOrderItem] = useState([]);



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
        navigation('/resto-do-dia');
    }

  
    return (
        <>
            <Header />
            <Main>
                <SectionMenu>
                    <ContainerButtons bntBreakfast='secundary' btnRestOfTheDay='terciary' onClickDay={handleClick} />
                    <Select />
                    <UlMenu>
                        {products.map((product) => (
                            product.type === 'Café da manhã' &&
                            <List key={product.id} name={product.name} price={`R$${product.price}`} onClick={() => setOrderItem((prevState) => [...prevState, product])} />
                        ))}
                    </UlMenu>
                </SectionMenu>
                <OrderResume orderItem={orderItem} />
            </Main>
        </>
    )
}

export default Breakfast;
