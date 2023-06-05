import React from 'react';
import { render, screen } from '@testing-library/react';
import Breakfast from './Breakfast';


describe('Select', () => {
    it('renderiza corretamente o número da cova', () => {
        render(<Breakfast/>);
        const covaOption = screen.getByRole('combobox');

        expect(covaOption).toBeInTheDocument();
    });

    it('renderiza corretamente o campo de cliente', () => {
        render(<Breakfast />);
        const clienteName = screen.getByPlaceholderText('Nome');

        expect(clienteName).toBeInTheDocument();
        expect(clienteName).toHaveAttribute('type', 'text');
        
    });
});

describe('Cadápio', () => {
    it('renderiza corretamente os itens do cardápio', () => {
        const cova = jest.fn();
        render ()
        expect(cova).toBeInTheDocument();
    });
});