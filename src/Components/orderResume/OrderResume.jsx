import { Section, Title } from './OrderResume.styles';
import btnDelete from '../../assets/btnDelete.svg'


const OrderResume = (props) => {
    return (
        <Section>
            <Title>Resumo da Lápide</Title>
            <p>Cova: {props.selectValue}</p>
            <p>Nome do Cliente: {props.clientNameValue}</p>
            <ul>
                {props.orderItem.map((item) => (
                    <li key={item.id}>
                        <h4>{item.name}</h4>
                        <p>{`R$${item.price * item.quantity}`}</p>
                        <button onClick={() => props.onClickQuantity(item, '-')}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => props.onClickQuantity(item, '+')}>+</button>
                        <button onClick={() => props.onClick(item)}>
                            <img src={btnDelete} alt='excluir item do pedido' />
                        </button>
                    </li>
                ))}
            </ul>
            <h3>Total: R${props.total}</h3>
            <button>Enviar</button>
        </Section>
    )
}

export default OrderResume;