import Logo from '../../assets/Logo.svg'
import { Section, H1, LogoImg, CreateForm, ParagraphError } from "./Login.styled";
import Button from '../../Components/button/Button';
import Input from '../../Components/input/Input';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userLogin } from "../../API/login";
/* import { Erro } from '../../Erros/Error'; */

const Login = () => {
  const navigation = useNavigate()
     const [email, setEmail] = useState('')
     const [password, setSenha] = useState('')
     const [error, setError] = useState(null); 
 
    const whenSaving = async (event) => {
     event.preventDefault();
          


     try{
       const signin = await userLogin(email, password)
       console.log(signin)

       navigation('/breakfast')
     }
     catch(error){
        setError(error.message)  
        console.log(error)
    }
 
   }
 
   return (
     <Section>
       <LogoImg src={Logo} alt='logo jason brueger' />
       <H1>Login</H1>
       <CreateForm onSubmit={whenSaving}>
           <Input
             type='email'
             value= {email}
             whenSaving={value => setEmail(value)}
             name='email'
             placeholder='Email'
           />
           <Input
             type='password'
             value={password}
             name='password'
             placeholder='Senha'
             whenSaving={value => setSenha(value)}
           />
            {error && <ParagraphError>{error}</ParagraphError>}
           <Button text={'Entrar'} />
       </CreateForm>
     </Section> 
   )
}
export default Login;