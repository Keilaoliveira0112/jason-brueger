import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Login from '../login/Login';
import { userLogin } from '../../API/login/login';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { setItem } from '../../storage/local';

jest.mock('react-router-dom', () => ({
    useNavigate: jest.fn(),
}));

jest.mock('../../API/login/login', () => ({
    userLogin: jest.fn().mockResolvedValueOnce({
        accessToken: "huhasud",
        user: {
            email: "atendente@email.com",
            id: 4,
            role: "atendente"
        }
    }),
}))

jest.mock('react-router-dom', () => ({
    useState: jest.fn(),
}));

jest.mock('../../ storage / local', () => ({
    localStorage: { setItem: jest.fn() },
}));

describe('Login', () => {
    it('deve redirecinar após o login com sucesso', async () => {

        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);
        userLogin.mockResolvedValueOnce({
            user: { role: 'atendente' },
        })


        render(<Login />);
        const email = screen.getByPlaceholderText('Email')
        const senha = screen.getByPlaceholderText('Senha')
        const button = screen.getByRole('button');

        fireEvent.change(email, { target: { value: 'texto@email.com' } });
        fireEvent.change(senha, { target: { value: 'password' } });

        fireEvent.click(button);
        await waitFor(() => {
            expect(userLogin).toHaveBeenCalledWith('texto@email.com', 'password');
           
        });
        expect(navigate).toHaveBeenCalledWith('/breakfast');
        expect(setItem).toHaveBeenCalledTimes(1);
        expect(setItem).toHaveBeenCalledWith('token', 'huhasud');

        it('não deve redirecinar caso o login estiver errado', async () => {
            const newLogin = {
                email: 'texto',
                senha: '123456'
            }
            // criamos uma string de error
            const error = 'Ocorreu um erro';
            userLogin.mockRejectedValueOnce(error);

            render(<Login />);
            const button = screen.getByRole('button');
            const email = screen.getByPlaceholderText('Email')
            const senha = screen.getByPlaceholderText('Senha')

            fireEvent.change(email, { target: { value: newLogin.email } });
            fireEvent.change(senha, { target: { value: newLogin.senha } });

            fireEvent.click(button);
            await waitFor(() => {
                expect(userLogin).toHaveBeenCalledWith('texto@email.com', 'password');
              
                expect(navigate).toHaveBeenCalledWith('/breakfast');
            });

        });

    });
});    


