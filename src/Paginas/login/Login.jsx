import Logo from '../../assets/Logo.svg'
import { Section, H1, LogoImg, CreateForm, ParagraphError } from "./Login.styled";
import Button from '../../Components/button/Button';
import Input from '../../Components/input/Input';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { userLogin } from "../../API/login/login";

const Login = () => {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (event) => {
        /* para não submeter o form do jeito tradicional*/
        event.preventDefault();

        try {
            const signin = await userLogin(email, password)
            console.log(signin)
            if (signin.user.role === 'atendente') {
                navigation('/breakfast')
            }
        }
        catch (error) {
            console.log('error:', error)
            console.log('error message:', error.message)
            setError(error.message)
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
                    /* onChange irá pegar o evento de digitar e extrair o valor do input após esse evento */
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* Se tiver o erro, irei exibir o erro */}
                {error && <ParagraphError>{error}</ParagraphError>}
                <Button type={'submit'} text={'Entrar'} />
            </CreateForm>
        </Section>
    )
}
export default Login;