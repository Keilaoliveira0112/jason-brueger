import btnDelete from "../../assets/btnDelete.svg";
import btnEdit from "../../assets/btnEdit.svg";
import { CardSection, Each, Topic, Value, GroupButtons, Buttons, ImgEdit, ImgDelete } from "./Card.styles";

const Card = (props) => {

  return (
    <CardSection>
      {props.list === "products" ? (
        <>
          {props.values.map((value) => (
            <Each key={value.id}>
              <Topic>
                <h6>Nº de Identifcação: </h6>
                <Value>{value.id}</Value>
              </Topic>
              <Topic>
                <h6>Nome: </h6>
                <Value>{value.name}</Value>
              </Topic>
              <Topic>
                <h6>Preço: </h6>
                <Value>{value.price}</Value>
              </Topic>
              <Topic>
                <h6>Tipo: </h6>
                <Value>{value.type}</Value>
              </Topic>
              <GroupButtons>
                <Buttons onClick={() => props.onClickEdit(value)}>
                  <ImgEdit src={btnEdit} alt="Botão de editar produto" />
                </Buttons>
                <Buttons onClick={() => props.onClickDelete(value.id)}>
                  <ImgDelete src={btnDelete} alt="Botão de excluir produto" />
                </Buttons>
              </GroupButtons>
            </Each>
          ))}
        </>
      ) : (
        <>
          {props.values.map((value) => (
            <Each key={value.id}>
              <Topic>
                <h6>Nº de Identifcação: </h6>
                <Value>{value.id}</Value>
              </Topic>
              <Topic>
                <h6>Nome: </h6>
                <Value>{value.name}</Value>
              </Topic>
              <Topic>
                <h6>Email: </h6>
                <Value>{value.price}</Value>
              </Topic>
              <Topic>
                <h6>Role: </h6>
                <Value>{value.type}</Value>
              </Topic>
              <GroupButtons>
                <Buttons onClick={() => props.onClickEdit()}>
                  <ImgEdit src={btnEdit} alt="Botão de editar produto" />
                </Buttons>
                <Buttons onClick={() => props.onClickDelete()}>
                  <ImgDelete src={btnDelete} alt="Botão de excluir produto" />
                </Buttons>
              </GroupButtons>
            </Each>
          ))}
        </>
      )}
    </CardSection>
  )

}

export default Card;