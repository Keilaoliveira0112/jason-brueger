import userEvent from '@testing-library/user-event';
import OrderResume from '../orderResume/OrderResume';
import { render, screen } from '@testing-library/react';

describe('<OrdeResume />', () => {
  it('renderiza o resumo do pedido e dispara suas ações corretamente', () => {
    const props = {
      selectValue: 1,
      clientNameValue: 'Maria',
      orderItem: [
        {
          id: 1,
          name: 'batata frita',
          price: 10,
          quantity: 5
        },
        {
          id: 2,
          name: 'agua',
          price: 2,
          quantity: 2
        }
      ],
      total: 54,
      onClickQuantity: jest.fn(),
      onClickDelete: jest.fn(),
      onClickSend: jest.fn()
    }
    render(<OrderResume {...props} />);

    const numeroDaCova = screen.getByText(props.selectValue)
    expect(numeroDaCova).toBeInTheDocument();

    const cliente = screen.getByText(props.clientNameValue)
    expect(cliente).toBeInTheDocument();

    const itemPedido = screen.getByText(props.orderItem[0].name)
    expect(itemPedido).toBeInTheDocument();

    const totalItem = screen.getByText("R$50")
    expect(totalItem).toBeInTheDocument();

    const totalPedido = screen.getByText(`R$ ${props.total}`)
    expect(totalPedido).toBeInTheDocument();

    const btns = screen.getAllByRole('button');
    expect(btns).toHaveLength(7);
    const btnReduzir = btns[0]
    userEvent.click(btnReduzir);
    expect(props.onClickQuantity).toHaveBeenCalledTimes(1);
    expect(props.onClickQuantity).toHaveBeenCalledWith(props.orderItem[0], '-');

    const btnAumentar = btns[1]
    userEvent.click(btnAumentar);
    expect(props.onClickQuantity).toHaveBeenCalledTimes(2);
    expect(props.onClickQuantity).toHaveBeenCalledWith(props.orderItem[0], '-');

    const btnDeletar = btns[2]
    userEvent.click(btnDeletar);
    expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    expect(props.onClickDelete).toHaveBeenCalledWith(props.orderItem[0]);

    const btnEnviar = btns[6]
    userEvent.click(btnEnviar);
    expect(props.onClickSend).toHaveBeenCalledTimes(1);
    expect(props.onClickSend).toHaveBeenCalledWith(props.total);
  });
});