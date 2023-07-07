import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import FormAdd from "./FormAdd";

describe("<FormAdd />", () => {
  it("Should render correctly when 'isProductForm' equals true", () => {
    const props = {
      isProductForm: true,
      onSubmit: jest.fn(),
      name: "teste",
      onChangeName: jest.fn(),
      price: 1,
      onChangePrice: jest.fn(),
      onClick: jest.fn(),
      childrenBtn: "Criar Produto"
    }

    render(<FormAdd {...props} />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
    expect(input.value).toBe(props.name)

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(5);

  });
});
