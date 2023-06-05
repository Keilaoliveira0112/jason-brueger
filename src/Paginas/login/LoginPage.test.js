import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import Login from './Login';
import userEvent from '@testing-library/user-event';
import { userLogin } from '../../API/login/login';

jest.mock('react-router-dom');
jest.mock('../../API/login/login');
//mock do localStorage() -> caminho do arquivo;

describe('Login', () => {
    it('deve redirecionar após o login com sucesso', async () => {
        const newLogin = {
            email: 'teste@email.com',
            senha: 'password'
        }

        const returnLogin = {
            accessToken: 'tokendeautenticaao',
            user: {
              email:'atendente@email.com',
              id: 4,
              role: 'atendente'
            }
        };

        //nos casos de sucessos retorno o objeto
        userLogin.mockResolvedValueOnce(returnLogin);
        const mockNavigate = jest.fn();
        useNavigate.mockReturnValue(mockNavigate); 

        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        //1. pegar os elementos na tela
        const email = screen.getByPlaceholderText('Email'); 
        const senha = screen.getByPlaceholderText('Senha');
        const btnEntrar =screen.getByText('Entrar');
        
        //2. pegar o evento de digitação no input e click no botão
        waitFor(() => {
            userEvent.type(email, newLogin.email);
            userEvent.type(senha, newLogin.senha);
            userEvent.click(btnEntrar);
        })

        //3. chamada da função em caso se sucesso
        await userLogin(newLogin.email, newLogin.senha);
        expect(userLogin).toHaveBeenCalledTimes(1);
        expect(userLogin).toHaveBeenCalledWith('teste@email.com', 'password');
        //4. Guardar o token do usuário no localStorage
        
        //5. De acordo com o role, redicionar o usuário para sua página
        //6. Em caso de erro., mostrar uma mensagem de erro;
    });

});
    