import btnDelete from "../../assets/btnDelete.svg";
import btnEdit from "../../assets/btnEdit.svg";
import {
  CardSection,
  Container,
  Topic,
  Value,
  GroupButtons,
  Buttons,
  ImgEdit,
  ImgDelete,
} from "./Card.styles";

const Card = (props) => {
  return (
    <CardSection>
      {props.values.map((value) => (
        <Container key={value.id}>
          <Topic>
            <h6>Nº de Identificação: </h6>
            <Value>{value.id}</Value>
          </Topic>
          <Topic>
            <h6>Nome: </h6>
            <Value>{value.name}</Value>
          </Topic>
          <Topic>
            <h6>{props.isProductList ? "Preço:" : "Email:"}</h6>
            <Value>{props.isProductList ? value.price : value.email}</Value>
          </Topic>
          <Topic>
            <h6>{props.isProductList ? "Tipo:" : "Cargo:"}</h6>
            <Value>{props.isProductList ? value.type : value.role}</Value>
          </Topic>
          <GroupButtons>
            <Buttons onClick={() => props.onClickEdit(value)}>
              <ImgEdit src={btnEdit} alt="Botão de editar" />
            </Buttons>
            <Buttons onClick={() => props.onClickDelete(value.id)}>
              <ImgDelete src={btnDelete} alt="Botão de excluir" />
            </Buttons>
          </GroupButtons>
        </Container>
      ))}
    </CardSection>
  );
};

export default Card;
