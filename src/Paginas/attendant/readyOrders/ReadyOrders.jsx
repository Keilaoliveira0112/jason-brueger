import Header from '../../../Components/header/Header';
import { useNavigate } from "react-router-dom";

const ReadyOrders = () => {
  const navigation = useNavigate();

  const handleClickNavigate = (e) => {
    e.preventDefault();
    const type = e.target.textContent === 'Novo Pedido' ? '/novo-pedido' : '/pedidos-prontos';
    navigation(type);
  }
  return (
    <>
      <Header 
        firstBtn='Novo Pedido'
        variantFirstBtn='quinary'
        secondBtn='Pedidos Prontos'
        variantSecondBtn=''
        onClick={handleClickNavigate} 
      />
      <h1>Em construção</h1>
    </>
  )
}

export default ReadyOrders;