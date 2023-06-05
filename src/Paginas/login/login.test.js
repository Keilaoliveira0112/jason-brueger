import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from '../login/Login';
import { userLogin } from '../../API/login/login';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setItem } from '../../storage/local';

jest.mock('../../API/login/login');

jest.mock('react-router-dom');

jest.mock('../../storage/local')

describe('Login', () => {
    it('deve redirecinar após o login com sucesso', async () => {

        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);
        userLogin.mockResolvedValueOnce({
            accessToken: "huhasud",
            user: {
                email: "atendente@email.com",
                id: 4,
                role: "atendente"
            }
        })


        render(<Login />);
        const email = screen.getByPlaceholderText('Email')
        const senha = screen.getByPlaceholderText('Senha')
        const button = screen.getByRole('button');

        fireEvent.change(email, { target: { value: 'texto@email.com' } });
        fireEvent.change(senha, { target: { value: 'password' } });

        fireEvent.click(button);
        await waitFor(() => {
            expect(navigate).toHaveBeenCalledWith('/breakfast');
        });
        expect(userLogin).toHaveBeenCalledWith('texto@email.com', 'password');
        expect(setItem).toHaveBeenCalledTimes(2);
        expect(setItem).toHaveBeenCalledWith('token', 'huhasud');
        expect(setItem).toHaveBeenCalledWith('userId', 4);
    });

    it('não deve redirecinar caso o login estiver errado', async () => {
        const newLogin = {
            email: 'texto',
            senha: '123456'
        }
        // criamos uma string de error
        const error = new Error('Ocorreu um erro');
        userLogin.mockRejectedValueOnce(error);

        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        render(<Login />);
        const button = screen.getByRole('button');
        const email = screen.getByPlaceholderText('Email')
        const senha = screen.getByPlaceholderText('Senha')

        fireEvent.change(email, { target: { value: newLogin.email } });
        fireEvent.change(senha, { target: { value: newLogin.senha } });

        fireEvent.click(button);
        await waitFor(() => {
            const paragrafoError = screen.getByText(error.message)
            
            expect(paragrafoError).toBeInTheDocument();
        });

        expect(userLogin).toHaveBeenCalledWith(newLogin.email, newLogin.senha);
        //não foi chamado
        expect(navigate).not.toHaveBeenCalled();

    });

});
  


