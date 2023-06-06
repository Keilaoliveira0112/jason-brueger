import Header from './Header';
import { render, screen } from '@testing-library/react';
import { useNavigate } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import { removeItem } from '../../storage/local';

jest.mock('react-router-dom');
jest.mock('../../storage/local')

describe('<Header />', () => {
    it('deve renderizar Header e executar suas ações corretamente', () => {
        const navigate = jest.fn();
        useNavigate.mockReturnValue(navigate);

        render(<Header />);
        // asserção dos elementos na tela
        expect(screen.getByRole('img', { name: 'logo jason brueger'})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Novo Pedido'})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Pedidos Prontos'})).toBeInTheDocument();
        const logout = screen.getByAltText('botão de sair');
        expect(logout).toBeInTheDocument();

        userEvent.click(logout);
        expect(navigate).toHaveBeenCalledTimes(1);
        expect(navigate).toHaveBeenCalledWith('/');
        expect(removeItem).toHaveBeenCalledTimes(1);
        expect(removeItem).toHaveBeenCalledWith('token');
    })
})