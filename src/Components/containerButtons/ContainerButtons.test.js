import ContainerButtons from "./ContainerButtons";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<ContainerButtons />', () => {
    it('deve renderizar e executar as funções dos botões', () => {
        const props = {
            onClickBreakfast: jest.fn(),
            onClickDay: jest.fn()
        }

        render(<ContainerButtons {...props}/>);

        const button = screen.getAllByRole('button');
        //espero que eu tenha 2 botoes
        expect(button).toHaveLength(2);
        
        const btnBreakfast = screen.getByText('Café da manhã');
        userEvent.click(btnBreakfast);
        expect(props.onClickBreakfast).toHaveBeenCalledTimes(1);

        const btnRestOfTheDay = screen.getByText('Resto do dia');
        userEvent.click(btnRestOfTheDay);
        expect(props.onClickDay).toHaveBeenCalledTimes(1);
    })
})