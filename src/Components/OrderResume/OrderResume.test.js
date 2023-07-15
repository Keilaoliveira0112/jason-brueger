import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import OrderResume from "./OrderResume";

describe("<OrdeResume />", () => {
  it("Should render the order resume and trigger your actions correctly", () => {
    const props = {
      selectValue: 1,
      clientNameValue: "Maria",
      orderItem: [
        {
          id: 1,
          name: "batata frita",
          price: 10,
          quantity: 5,
        },
        {
          id: 2,
          name: "agua",
          price: 2,
          quantity: 2,
        },
      ],
      total: 54,
      onClickQuantity: jest.fn(),
      onClickDelete: jest.fn(),
      onClickSend: jest.fn(),
    };
    render(<OrderResume {...props} />);

    const pitNumber = screen.getByText(props.selectValue);
    expect(pitNumber).toBeInTheDocument();

    const clientName = screen.getByText(props.clientNameValue);
    expect(clientName).toBeInTheDocument();

    const orderItemName = screen.getByText(props.orderItem[0].name);
    expect(orderItemName).toBeInTheDocument();

    const orderItemTotal = screen.getByText("R$50");
    expect(orderItemTotal).toBeInTheDocument();

    const totalOrder = screen.getByText(`R$ ${props.total}`);
    expect(totalOrder).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(7);
    const btnReduce = btns[0];
    userEvent.click(btnReduce);
    expect(props.onClickQuantity).toHaveBeenCalledTimes(1);
    expect(props.onClickQuantity).toHaveBeenCalledWith(props.orderItem[0], "-");

    const btnIncrease = btns[1];
    userEvent.click(btnIncrease);
    expect(props.onClickQuantity).toHaveBeenCalledTimes(2);
    expect(props.onClickQuantity).toHaveBeenCalledWith(props.orderItem[0], "-");

    const btnDelete = btns[2];
    userEvent.click(btnDelete);
    expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    expect(props.onClickDelete).toHaveBeenCalledWith(props.orderItem[0]);

    const btnSend = btns[6];
    userEvent.click(btnSend);
    expect(props.onClickSend).toHaveBeenCalledTimes(1);
    expect(props.onClickSend).toHaveBeenCalledWith(props.total);
  });
});
