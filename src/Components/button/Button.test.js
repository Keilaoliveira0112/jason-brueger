import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    it('should render the button correctly', () => {
        render(<Button />);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });

    it('should check the type of the button', () => {
        render(<Button type='submit' />);
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('type', 'submit')
    });

    it('should render the button with the text "Enviar"', () => {
        
        render(<Button>Enviar</Button>);
        const button = screen.getByRole('button', { name: /enviar/i });
        expect(button).toBeInTheDocument();
    })
})