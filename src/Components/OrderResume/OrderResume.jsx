import {
  Section,
  Title,
  Topic,
  Value,
  PitNumber,
  ClientName,
  Ul,
  TemplateList,
  ItemName,
  ItemPrice,
  BtnReduce,
  ItemQuantity,
  BtnIncrease,
  BtnDelete,
  ImgDelete,
  TotalName,
  TotalValue,
} from "./OrderResume.styles";
import btnDelete from "../../assets/btnDelete.svg";
import Button from "../Button/Button";

const OrderResume = (props) => {
  return (
    <Section>
      <Title>Resumo da Lápide</Title>
      <PitNumber>
        <Topic>Cova: </Topic>
        <Value>{props.selectValue}</Value>
      </PitNumber>
      <ClientName>
        <Topic>Cliente: </Topic>
        <Value>{props.clientNameValue}</Value>
      </ClientName>
      <Ul>
        {props.orderItem.map((item) => (
          <TemplateList key={item.id}>
            <ItemName>{item.name}</ItemName>
            <ItemPrice>{`R$${item.price * item.quantity}`}</ItemPrice>
            <BtnReduce onClick={() => props.onClickQuantity(item, "-")}>-</BtnReduce>
            <ItemQuantity>{item.quantity}</ItemQuantity>
            <BtnIncrease onClick={() => props.onClickQuantity(item, "+")}>+</BtnIncrease>
            <BtnDelete onClick={() => props.onClickDelete(item)}>
              <ImgDelete src={btnDelete} alt="excluir item do pedido" />
            </BtnDelete>
          </TemplateList>
        ))}
      </Ul>
      <TotalName>Total: </TotalName>
      <TotalValue>
        R$ {props.total}
      </TotalValue>
      <Button variant="quaternary" onClick={() => props.onClickSend(props.total)}>Enviar</Button>
    </Section>
  );
};

export default OrderResume;
