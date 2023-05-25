import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from "./Input";

describe('<Input />', () => {
    it('should render the input correctly', () => {
        render(<Input type='email' />);

        //consultamos o input por sua role
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });

    it('should check the type of input', () => {
        render(<Input type='email' />);

        const input = screen.getByRole('textbox')
        expect(input).toHaveAttribute('type', 'email')
    });

    it('should check the placeholder of input', () => {
        render(<Input placeholder='Email' />);

        const input = screen.getByPlaceholderText('Email')
        expect(input).toBeInTheDocument()
    });

    it('should check if the user will be able to change the value of input', () => {
        render(<Input type='email' placeholder='Email' />);

        //consultamos o input pelo placeholder
        const input = screen.getByPlaceholderText('Email');
        expect(input).toBeInTheDocument();

        //user.type -> elemento que quer digitar e algum valor de texto.
        userEvent.type(input, 'texto@email.com');
        //verificamos se o valor esta no input
        expect(input).toHaveValue('texto@email.com')
    });

});
it('should check the attribute name of input', () => {
    render(<Input name='email' />);

    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('name', 'email')
});

it('should call onChange function on each key pressed', () => {
    const fn = jest.fn()
    render(<Input onChange={fn} />);

    const input = screen.getByRole('textbox')
    const value = 'changed value';

    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length)
});