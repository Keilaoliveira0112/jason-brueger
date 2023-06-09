import Logo from '../../assets/Logo.svg'
import { Section, H1, LogoImg, CreateForm, ParagraphError } from "./Login.styled";
import Button from '../../Components/button/Button';
import Input from '../../Components/input/Input';
import { useNavigate } from "react-router-dom";
import { React, useState } from 'react';
import { userLogin } from "../../API/login/login";
import { setItem } from '../../storage/local';

const Login = () => {
  const navigation = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signin = await userLogin(email, password);
      setItem('token', signin.accessToken);
      setItem('userId', signin.user.id);
      if (signin.user.role === 'atendente') {
        navigation('/breakfast');
      }
    }
    catch (error) {
      setError(error.message);
    }
  }

  return (
    <Section>
      <LogoImg src={Logo} alt='logo jason brueger' />
      <H1>Login</H1>
      <CreateForm onSubmit={handleSubmit}>
        <Input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name='email'
          placeholder='Email'
        />
        <Input
          type='password'
          value={password}
          name='password'
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ParagraphError>{error}</ParagraphError>}
        <Button variant='primary' type='submit'>Entrar</Button> 
      </CreateForm>
    </Section>
  )
}
export default Login;