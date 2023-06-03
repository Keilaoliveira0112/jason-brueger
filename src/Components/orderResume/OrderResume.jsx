import { Section, Title, Name, ValueName, TemplateList, ItemName, ItemPrice, BtnReduce, ItemQuantity, BtnIncrease, BtnDelete, ImgDelete } from './OrderResume.styles';
import btnDelete from '../../assets/btnDelete.svg'
import Button from '../button/Button';

const OrderResume = (props) => {
  return (
    <Section>
      <Title>Resumo da Lápide</Title>
      <Name>Cova: </Name>
      <ValueName>{props.selectValue}</ValueName>
      <Name>Cliente: </Name>
      <ValueName> {props.clientNameValue}</ValueName>
      <ul>
        {props.orderItem.map((item)=> (
          <TemplateList key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{`R$${item.price * item.quantity}`}</ItemPrice>
            <BtnReduce onClick={() => props.onClickQuantity(item, '-')}>-</BtnReduce>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <BtnIncrease onClick={() => props.onClickQuantity(item, '+')}>+</BtnIncrease>
            <BtnDelete onClick={() => props.onClickDelete(item)}>
              <ImgDelete src={btnDelete} alt='excluir item do pedido'/>
            </BtnDelete>
          </TemplateList>
        ))}       
      </ul>
      <h3>Total: R${props.total}</h3>
      <Button variant='quartenary' onClick={() => props.onClickSend()}>Enviar</Button>
    </Section>
  )
}
  
export default OrderResume;