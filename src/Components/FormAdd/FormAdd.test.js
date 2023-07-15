import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormAdd from "./FormAdd";

describe("<FormAdd />", () => {
  it("Should render correctly", () => {
    const optionsForm = {
      inputLabel: [
        {
          label: "Nome do Produto:",
          type: "text",
          name: "name",
          placeholder: "Nome do Produto",
        },
        {
          label: "Preço:",
          min: 0,
          type: "number",
          name: "price",
          placeholder: "Preço",
        },
      ],
      labelButton: "Selecione o tipo:",
      buttons: ["Café da Manhã", "Hamburguers", "Acompanhamentos", "Bebidas"],
    };

    const onSubmit = jest.fn(e => e.preventDefault());

    const props = {
      optionsForm,
      onSubmit,
      onClick: jest.fn(),
      childrenBtn: "Criar Produto",
    };

    render(<FormAdd {...props} />);

    const topic = screen.getByText("Nome do Produto:");
    expect(topic).toBeInTheDocument();

    const name = screen.getByPlaceholderText("Nome do Produto");
    expect(name).toBeInTheDocument();
    const price = screen.getByPlaceholderText("Preço");
    expect(price).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(5);

    const btnSubmit = btns[4];
    userEvent.click(btnSubmit);
    expect(props.onSubmit).toHaveBeenCalledTimes(1);

  });
  it("Should render correctly", () => {
    const optionsForm = {
      inputLabel: [
        {
          label: "Nome:",
          type: "text",
          name: "name",
          placeholder: "Nome",
        },
        {
          label: "Email:",
          type: "email",
          name: "email",
          placeholder: "Email",
        },
        {
          label: "Senha:",
          type: "password",
          name: "password",
          placeholder: "Senha",
        },
      ],
      labelButton: "Selecione o cargo:",
      buttons: ["Atendente", "Chefe de Cozinha", "Admin"],
    };

    const onSubmit = jest.fn(e => e.preventDefault());

    const props = {
      optionsForm,
      onSubmit,
      onClick: jest.fn(),
      childrenBtn: "Criar Cadastro",
    };

    render(<FormAdd {...props} />);

    const name = screen.getByPlaceholderText("Nome");
    expect(name).toBeInTheDocument();
    const email = screen.getByPlaceholderText("Email");
    expect(email).toBeInTheDocument();
    const password = screen.getByPlaceholderText("Senha");
    expect(password).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(4);

    const btnOptionsRole = btns[0];
    userEvent.click(btnOptionsRole);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
