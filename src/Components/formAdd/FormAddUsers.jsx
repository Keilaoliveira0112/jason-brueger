import Input from "../input/Input";
import Button from "../button/Button";
import { Form, GroupButtons } from "./FormAddUsers.styles";

const FormAddUsers = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      <Input
        type="text"
        value={props.name}
        onChange={props.onChangeName}
        name="name"
        placeholder="Nome"
      />
      <Input
        type="text"
        value={props.email}
        name="email"
        placeholder="Email"
        onChange={props.onChangeEmail}
      />
       <Input
        type="text"
        value={props.password}
        name="password"
        placeholder="Senha"
        onChange={props.onChangePassword}
      />
        <GroupButtons>
        <Button variant='octonary' onClick={() => props.onClick()}>Garçon/Garçonete</Button>
        <Button variant='octonary' onClick={() => props.onClick()}>Chefe de Cozinha</Button>
        <Button variant='octonary' onClick={() => props.onClick()}>Administrtador</Button>
        </GroupButtons>
      <Button variant='primary' type='submit'>Criar</Button>
    </Form>
  )
}

export default FormAddUsers;