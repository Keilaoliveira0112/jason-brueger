import { React, useState, useEffect } from "react";
import Header from "../../../Components/header/Header";
import { Main } from './DeliveredOrders.styles';
import Order from '../../../Components/order/Order';
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../../API/orders/getOrders";
import { getItem } from '../../../storage/local';



const DeliveredOrders = () => {
    const navigation = useNavigate();
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
  

    useEffect(() => {
        
        const fetchData = async () => {
              try {
                const token = getItem('token');
                const response = await getOrders(token);
                

                if (!response.ok){
                    throw new Error(`${response.status}: Erro ao finalizar o pedido!`);
                }

                const orderList = await response.json();
                console.log('lista de pedidos', orderList)
                const filterDelivered = orderList.filter((order) => order.status === 'ready');
                setOrders(filterDelivered);
            }
            catch (error) {
                setError(error.message);
                
            }
        };
        fetchData()
    }, []);

    const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Pedidos Pendentes' ? '/pedidos-pendentes' : '/pedidos-entregues';
    navigation(type);
  }

   /*  const sortByDateTime = (a, b) => {
        console.log(a, b)
        // Converter os tempos para objetos Date
        const inicio = new Date(a);
        const fim = new Date(b);

        // Calcular a diferença em milissegundos
        const diferenca = fim.getTime() - inicio.getTime();

        // Converter a diferença para minutos
        const minutes = Math.floor(diferenca / (1000 * 60));

        return minutes;
    }; */

    return (
    <>
      <Header
        firstBtn='Pedidos Pendentes'
        variantFirstBtn='quinary'
        secondBtn='Pedidos Entregues'
        variantSecondBtn=''
        onClick={handleClickNavigate}  
      />
      <Main>
        {orders.map((order) => {
            console.log(order)
          return <Order 
            page='deliveredOrders'
            orderResume={order}
            error={error}
         />
        })}    
     </Main>
   
    </>
  )
}

export default DeliveredOrders;