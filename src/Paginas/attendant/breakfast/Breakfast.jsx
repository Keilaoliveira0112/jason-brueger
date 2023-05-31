import List from '../../../Components/list/List';
import Button from '../../../Components/button/Button';
import Header from '../../../Components/header/Header';
import ContainerButtons from '../../../Components/containerButtons/ContainerButtons';
import Select from '../../../Components/select/Select';
import { Main, SectionMenu, UlMenu,  OrderResume, Pay, Payment, TitleMenu } from '../breakfast/Breakfast.styled';
import { React, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { getProducts } from '../../../API/products/products';




const Breakfast = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            const response = await getProducts(token);
            const productsList = await response.json();
            setProducts(productsList)
        }
        fetchData();
    }, [])
    
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
                    <ContainerButtons onClick={handleClick} />
                    <Select />   
                        <UlMenu>
                            {products.map((product) => {
                              return <List name={product.name} price={`R$${product.price}`} />
                            })}
                           
                        </UlMenu>    
                </SectionMenu>
                <OrderResume>
                    <Pay>
                        <h1>Resumo da Lápide</h1>
                        <p>Cova:</p>
                        <p>Hora:</p>

                        <Payment>
                            <TitleMenu>Total: </TitleMenu>
                            <Button variant='quartenary'>Enviar</Button>
                        </Payment>
                    </Pay>
                </OrderResume>
               

            </Main>
        </>
    )
}

export default Breakfast;
