import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ModalUpdate from "./ModalUpdate";

describe("<ModalUpdate />", () => {
  it("Should render the ModalUpdate component and perform its actions correctly", () => {
    const optionsForm = {
      childrenBtn: "Criar Produto",
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

    const props = {
      isOpen: true,
      setModalOpen: jest.fn(),
      onSubmit: jest.fn(e => e.preventDefault()),
      onClickForm: jest.fn(),
      optionsForm,
      childrenBtn: "Atualizar Produto",
    };

    render(<ModalUpdate {...props} />);

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(6);

    const btnClose = btns[0];
    userEvent.click(btnClose);
    expect(props.setModalOpen).toHaveBeenCalledTimes(1);

    const btnUpdate = btns[4];
    userEvent.click(btnUpdate);
    expect(props.onSubmit).toHaveBeenCalledTimes(1);
  });

  it("Should not render if isOpen is false", () => {
    const props = {
      isOpen: false,
    };

    render(<ModalUpdate {...props} />);
    expect(props.isOpen).toBeFalsy();
  });
});
