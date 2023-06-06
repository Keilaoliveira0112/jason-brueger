import Select from "./Select";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<Select />', () => {
    it('deve verificar a alteração do valor quando selcionar uma nova mesa', () =>{
        render(<Select />);
        const select = screen.getByRole('combobox')
        expect(select).toBeInTheDocument();
        expect(select).toHaveValue('Cova');

        userEvent.selectOptions(select, '001');
        expect(select).toHaveValue('001');
    })
})