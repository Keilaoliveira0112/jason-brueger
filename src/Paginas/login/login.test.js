import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../login/Login';

describe('Login', () => {
    it('should render the soon correctly', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const logoElement = screen.getByRole('img', { name: "logo jason brueger" });
        expect(logoElement).toBeInTheDocument();
    });

    it('should render the input correctly', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );
        const inputElement = screen.getByRole('textbox');
        expect(inputElement).toHaveAttribute('type', 'email');
    });

});
    