import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("<Card />", () => {
  it("Should render correctly when isProductList equals 'true'", () => {
    const values = [
      {
        id: 14,
        name: "Nome do Produto 1",
        price: 3,
        type: "Café da manhã",
        quantity: 1,
      },
      {
        id: 15,
        name: "Nome do Produto 2",
        price: 5,
        type: "Café da manhã",
        quantity: 1,
      },
    ];

    const props = {
      isProductList: true,
      values,
      onClickEdit: jest.fn(),
      onClickDelete: jest.fn(),
    };
    render(<Card {...props} />);

    const identificationNumber = screen.getByText(props.values[0].id);
    expect(identificationNumber).toBeInTheDocument();

    const productName = screen.getByText(props.values[1].name);
    expect(productName).toBeInTheDocument();

    const productPrice = screen.getByText(props.values[1].price);
    expect(productPrice).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(4);

    const btnEdit = btns[0];
    userEvent.click(btnEdit);
    expect(props.onClickEdit).toHaveBeenCalledTimes(1);
    expect(props.onClickEdit).toHaveBeenCalledWith(props.values[0]);

    const btnDelete = btns[1];
    userEvent.click(btnDelete);
    expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    expect(props.onClickDelete).toHaveBeenCalledWith(props.values[0].id);
  });

  it("Should render correctly when isProductList equals 'false'", () => {
    const values = [
      {
        email: "teste1@teste.com",
        password: "$2a$10$gVkmcWdnwEBxXj2PWjuv9uDx7BfjiAobbabDAOrH2o8b1i3E7KwR.",
        name: "Teste 1",
        role: "atendente",
        id: 4,
      },
      {
        email: "teste2@teste.com",
        password: "$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey",
        name: "Teste 2",
        role: "admin",
        id: 5,
      },
    ];

    const props = {
      isProductList: false,
      values,
      onClickEdit: jest.fn(),
      onClickDelete: jest.fn(),
    };
    render(<Card {...props} />);

    const userEmail = screen.getByText(props.values[0].email);
    expect(userEmail).toBeInTheDocument();

    const userRole = screen.getByText(props.values[1].role);
    expect(userRole).toBeInTheDocument();

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(4);

    const imgEdit = screen.getAllByRole("img", { name: "Botão de editar" });
    expect(imgEdit).toHaveLength(2);
    const imgEditFirstUser = imgEdit[0];
    expect(imgEditFirstUser).toBeInTheDocument();

    const imgDelete = screen.getAllByRole("img", { name: "Botão de excluir" });
    expect(imgDelete).toHaveLength(2);
    const imgDeleteSecondUser = imgDelete[1];
    expect(imgDeleteSecondUser).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(4);

    const btnEdit = btns[0];
    userEvent.click(btnEdit);
    expect(props.onClickEdit).toHaveBeenCalledTimes(1);
    expect(props.onClickEdit).toHaveBeenCalledWith(props.values[0]);

    const btnDelete = btns[1];
    userEvent.click(btnDelete);
    expect(props.onClickDelete).toHaveBeenCalledTimes(1);
    expect(props.onClickDelete).toHaveBeenCalledWith(props.values[0].id);
  });
});
