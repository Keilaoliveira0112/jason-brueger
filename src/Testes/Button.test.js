import { render, screen } from '@testing-library/react';
import Button from '../Components/button/Button';
import React from "react";
import '@testing-library/jest-dom/extend-expect'; 


describe("Botao", () => {
    it("Should render the button with the text", () => {
        render(<Button/>);
        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
    });
});
