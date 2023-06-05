import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
    /* o que temos no componente button?
     1. é uma função
     2. um jsx, então precisa renderiza na tela(não no navegador no código mesmo com jest-dom)
     3. checar algumas coisas como se o tem realmente type, text*/
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
        //Utilizaremos ele para primeiro renderizar o nosso botão em jsx
        render(<Button>Enviar</Button>);
        //get -> quando a gente sabe que o elemento ta na tela

        //acessibilidade, leitores de telas que detecta um botaão e esse botão tem tal texto (getByRole())
        //recebe dois parametros, seleciona o elemneto e 
        //expressão regular que aceita letras minuscula
        //captura o botão com getByRole
        const button = screen.getByRole('button', { name: /enviar/i });
        //espero que esse botão esteja no documento, na tela.
        expect(button).toBeInTheDocument();
    })
})