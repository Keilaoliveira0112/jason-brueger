import ContainerButtons from "./ContainerButtons";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('<ContainerButtons />', () => {
    it('deve renderizar e executar as funções dos botões', () => {
        const props = {
            onClickBtnOne: jest.fn(),
            onClickBtnTwo: jest.fn(),
            childrenBtnOne: 'Café da manhã',
            childrenBtnTwo: 'Resto do dia'
        }

        render(<ContainerButtons {...props}/>);

        const button = screen.getAllByRole('button');
        expect(button).toHaveLength(2);
        
        const btnFirst = screen.getByText(props.childrenBtnOne);
        userEvent.click(btnFirst);
        expect(props.onClickBtnOne).toHaveBeenCalledTimes(1);

        const btnSecond = screen.getByText(props.childrenBtnTwo);
        userEvent.click(btnSecond);
        expect(props.onClickBtnTwo).toHaveBeenCalledTimes(1);
    })
})