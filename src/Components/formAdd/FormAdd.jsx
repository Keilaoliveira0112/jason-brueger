import Input from "../Input/Input";
import Button from "../Button/Button";
import { Form, Topic, GroupButtons } from "./FormAdd.styles";

const FormAdd = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {props.isProductForm ? (
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
            <Button variant="octonary" onClick={props.onClick}>Café da Manhã</Button>
            <Button variant="octonary" onClick={props.onClick}>Hamburguers</Button>
            <Button variant="octonary" onClick={props.onClick}>Acompanhamentos</Button>
            <Button variant="octonary" onClick={props.onClick}>Bebidas</Button>
          </GroupButtons>
        </>
      ) : (
        <>
          <Topic htmlFor="name">Nome: </Topic>
          <Input
            type="text"
            value={props.name}
            onChange={props.onChangeName}
            name="name"
            placeholder="Nome"
          />
          <Topic htmlFor="name">Email: </Topic>
          <Input
            type="email"
            value={props.email}
            name="email"
            placeholder="Email"
            onChange={props.onChangeEmail}
          />
          <Topic htmlFor="name">Senha: </Topic>
          <Input
            type="password"
            value={props.password}
            name="password"
            placeholder="Senha"
            onChange={props.onChangePassword}
          />
          <Topic htmlFor="name">Selecione o cargo: </Topic>
          <GroupButtons>
            <Button variant="octonary" onClick={props.onClick}>Atendente</Button>
            <Button variant="octonary" onClick={props.onClick}>Chefe de Cozinha</Button>
            <Button variant="octonary" onClick={props.onClick}>Admin</Button>
          </GroupButtons>
        </>
      )}
      <Button variant="nonary" type="submit">{props.childrenBtn}</Button>
    </Form>
  );
};

export default FormAdd;
