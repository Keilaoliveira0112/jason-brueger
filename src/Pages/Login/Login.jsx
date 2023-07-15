import { useNavigate } from "react-router-dom";
import { React, useState } from "react";
import logo from "../../assets/logo.svg";
import {
  Section,
  H1,
  LogoImg,
  CreateForm,
  ParagraphError,
} from "./Login.styled";
import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import userLogin from "../../api/login/login";
import pageRoute from "../../router/pageRoute";
import { setItem } from "../../utils/localStorage";

const Login = () => {
  const navigation = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const email = event.target.elements[0].value;
      const password = event.target.elements[1].value;

      const signin = await userLogin(email, password);
      setItem("token", signin.accessToken);
      setItem("username", signin.user.name);
      setItem("role", signin.user.role);
      if (signin.user.role === "atendente") {
        navigation(pageRoute.newOrder);
      }
      if (signin.user.role === "chefe de cozinha") {
        navigation(pageRoute.pendingOrders);
      }
      if (signin.user.role === "admin") {
        navigation(pageRoute.collaborators);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Section>
      <LogoImg src={logo} alt="logo jason brueger" />
      <H1>Login</H1>
      <CreateForm onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          placeholder="Senha"
        />
        {error && <ParagraphError>{error}</ParagraphError>}
        <Button variant="primary" type="submit">Entrar</Button>
      </CreateForm>
    </Section>
  );
};
export default Login;
