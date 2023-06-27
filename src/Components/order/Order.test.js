import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Order from './Order';
//import { differenceInMinutes } from "date-fns";

//jest.mock('date-fns');

describe('<Order />', () => {
  const products = [
    {
      id: 4,
      name: 'Hamburguer de cérebro humano',
      price: 15,
      type: 'Hamburguers',
      quantity: 2
    },
    {
      id: 6,
      name: 'Batatinha frita 123',
      price: 10,
      type: 'Acompanhamentos',
      quantity: 3
    }
  ];
  it('Deve renderizar o componente Order corretamente quando a page for Pedidos Pendentes', () => {
    const props = {
      page: 'Pedidos Pendentes',
      orders: [
        {
          id: 9,
          table: '001',
          userName: 'NomeDoAtendente',
          client: 'NomeDoCliente',
          products,
          orderTotal: 60,
          status:'pending',
          dataEntry: '2023-06-14T16:26:39.739Z'
        }
      ],
      onClick: jest.fn()
    }

    render(<Order {...props}/>);
    //screen.debug();

    const imgStar = screen.getByRole('img', { name: 'Imagem de uma estrela que indica a hora que o pedido foi feito'});
    expect(imgStar).toBeInTheDocument();

    const startTime = screen.getByText('13h26min')
    expect(startTime).toBeInTheDocument();

    const tableNumber= screen.getByText(props.orders[0].table)
    expect(tableNumber).toBeInTheDocument();

    const clientName = screen.getByText(props.orders[0].client)
    expect(clientName).toBeInTheDocument();

    const attendantName = screen.getByText(props.orders[0].userName)
    expect(attendantName).toBeInTheDocument();

    const productsName = screen.getByText(props.orders[0].products[0].name)
    expect(productsName).toBeInTheDocument();

    const productsQuantity = screen.getByText(props.orders[0].products[0].quantity)
    expect(productsQuantity).toBeInTheDocument();

    const btnReady = screen.getByRole('button');
    userEvent.click(btnReady);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('Deve renderizar o componente Order corretamente quando a page for Pedidos Concluídos', () => {
    const props = {
      page: 'Pedidos Concluídos',
      orders: [
        {
          id: 9,
          table: '001',
          userName: 'NomeDoAtendente',
          client: 'NomeDoCliente',
          products,
          orderTotal: 60,
          status:'ready',
          dataEntry: '2023-06-14T16:26:39.739Z',
          dateProcessed: '2023-06-14T16:40:39.739Z'
        }
      ],
    }

    //const minutesCalculation = jest.fn();
    //differenceInMinutes.mockReturnValue(minutesCalculation);

    render(<Order {...props}/>);
    //screen.debug();

    const imgCross = screen.getByRole('img', { name: 'Imagem de uma cruz que indica a hora em que o pedido foi concluído'});
    expect(imgCross).toBeInTheDocument();

    const endTime = screen.getByText('13h40min')
    expect(endTime).toBeInTheDocument();

    //expect(minutesCalculation).toHaveBeenCalledTimes(1);
  })

  it('Deve renderizar o componente Order corretamente quando a page for Pedidos Prontos', () => {
    const props = {
      page: 'Pedidos Prontos',
      orders: [
        {
          id: 9,
          table: '001',
          userName: 'NomeDoAtendente',
          client: 'NomeDoCliente',
          products,
          orderTotal: 60,
          status:'ready',
          dataEntry: '2023-06-14T19:26:39.739Z',
          dateProcessed: '2023-06-14T19:40:39.739Z'
        }
      ],
      onClick: jest.fn()
    }

    render(<Order {...props}/>);
    //screen.debug();

    const btnDelivered = screen.getByText('Entregue');
    userEvent.click(btnDelivered);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  })
})