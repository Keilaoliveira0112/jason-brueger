import { render, screen } from '@testing-library/react';
import React from "react";
import '@testing-library/jest-dom/extend-expect'; 
import { LogoImg } from '../Paginas/login/Login.styled';

describe("Botao", () => {
    it("Should render the button with the text", () => {
        render(<LogoImg />);
        const logo = screen.getByRole('img');
        expect(logo).toBeInTheDocument();
    });
});