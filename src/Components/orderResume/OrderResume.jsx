import { Section, Title } from './OrderResume.styles';
import btnDelete from '../../assets/btnDelete.svg'

const OrderResume = (props) => {
  return (
    <Section>
      <Title>Resumo da Lápide</Title>
      <p>Cova:{props.selectValue}</p>
      <ul>
        {props.orderItem.map((item)=>
          <li key={item.id}>
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button>-</button>
            <p>1</p>
            <button>+</button>
            <img src={btnDelete} alt='excluir item do pedido'/>
          </li>
        )}
        
      </ul>
      <h3>Total: R$</h3>
    </Section>
  )
}
  
export default OrderResume;