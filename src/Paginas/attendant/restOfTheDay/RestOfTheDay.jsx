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
                    <ContainerButtons bntBreakfast='terciary' btnRestOfTheDay='secundary' onClickBreakfast={handleClick} />
                    <Select />
                    <TitleMenu>Hamburguers</TitleMenu>
                    <UlMenu>
                        {products.map((product) => (
                            product.type === 'Hamburguers' &&
                            <List key={product.id} name={product.name} price={`R$${product.price}`} onClick={() => setOrderItem((prevState) => [...prevState, product])} />
                        ))}
                    </UlMenu>
                    <TitleMenu>Acompanhamentos</TitleMenu>
                    <UlMenu >
                        {products.map((product) => (
                            product.type === 'Acompanhamentos' &&
                            <List key={product.id} name={product.name} price={`R$${product.price}`} onClick={() => setOrderItem((prevState) => [...prevState, product])} />
                        ))}
                    </UlMenu>
                    <TitleMenu>Bebidas</TitleMenu>
                    <UlMenu>
                        {products.map((product) => (
                            product.type === 'Bebidas' &&
                            <List key={product.id} name={product.name} price={`R$${product.price}`} onClick={() => setOrderItem((prevState) => [...prevState, product])} />
                        ))}
                    </UlMenu>
                </SectionMenu>
                <OrderResume orderItem={orderItem} />
            </Main>

        </>
    )
}

export default RestOfTheDay;