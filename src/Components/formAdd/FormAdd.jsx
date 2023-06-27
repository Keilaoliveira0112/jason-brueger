import Input from "../input/Input";
import Button from "../button/Button";
import { Form, Topic, GroupButtons } from "./FormAdd.styles";

const FormAdd = (props) => {
  return (
   
    <Form onSubmit={props.onSubmit}>
    {props.form === 'products' ? ( 
    <>
      <Topic htmlFor="name">Nome do Produto: </Topic>
      <Input
        type="text"
        value={props.name}
        onChange={props.onChangeName}
        name="name"
        placeholder="Nome do Produto"
      />
      <Topic htmlFor="price">Preço: </Topic>
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
    </>

    ) : (
      <>
      <Input
        type="text"
        value={props.name}
        onChange={props.onChangeName}
        name="name"
        placeholder="Nome"
      />
      <Input
        type="email"
        value={props.email}
        name="email"
        placeholder="Email"
        onChange={props.onChangeEmail}
      />
       <Input
        type="password"
        value={props.password}
        name="password"
        placeholder="Senha"
        onChange={props.onChangePassword}
      />
       <GroupButtons>
        <Button variant='octonary' onClick={props.onClick}>atendente</Button>
        <Button variant='octonary' onClick={props.onClick}>chefe de cozinha</Button>
        <Button variant='octonary' onClick={props.onClick}>admin</Button>
        </GroupButtons>
      
      </>  
    )}
    <Button variant='nonary' type='submit'>{props.childrenBtn}</Button>
    </Form>
  )
}

export default FormAdd;