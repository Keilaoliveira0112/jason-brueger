import Input from "../input/Input";
import Button from "../button/Button";
import { Form, Topic, GroupButtons } from "./FormAdd.styles";

const FormAdd = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Topic for="name">Nome do Produto: </Topic>
      <Input
        type="text"
        value={props.name}
        onChange={props.onChangeName}
        name="name"
        placeholder="Nome do Produto"
      />
      <Topic for="price">Preço: </Topic>
      <Input
        min="0"
        type="number"
        value={props.price}
        name="price"
        placeholder="Preço"
        onChange={props.onChangePrice}
      />
      <Topic>Selecione o tipo: </Topic>
      <GroupButtons>
        <Button variant='octonary' onClick={props.onClick}>Café da Manhã</Button>
        <Button variant='octonary' onClick={props.onClick}>Hamburguers</Button>
        <Button variant='octonary' onClick={props.onClick}>Acompanhamentos</Button>
        <Button variant='octonary' onClick={props.onClick}>Bebidas</Button>
      </GroupButtons>
      <Button variant='nonary' type='submit'>Criar Produto</Button>
    </Form>
  )
}

export default FormAdd;