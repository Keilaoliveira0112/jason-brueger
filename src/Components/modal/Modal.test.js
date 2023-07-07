import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("<Modal />", () => {
  it("Should render the Modal component and perform its actions correctly when typeModal is 'confirmation'", () => {
    const props = {
      isOpen: true,
      typeModal: "confirmation",
      message: "Tem certeza que deseja marcar esse pedido como concluído?",
      setModalOpen: jest.fn(),
      send: jest.fn(),
    };

    render(<Modal {...props} />);

    const confirmationMessage = screen.getByText(props.message);
    expect(confirmationMessage).toBeInTheDocument();

    const btns = screen.getAllByRole("button");
    expect(btns).toHaveLength(3);

    const btnClose = btns[0];
    userEvent.click(btnClose);
    expect(props.setModalOpen).toHaveBeenCalledTimes(1);

    const btnCancel = btns[1];
    userEvent.click(btnCancel);
    expect(props.setModalOpen).toHaveBeenCalledTimes(2);

    const btnYes = btns[2];
    userEvent.click(btnYes);
    expect(props.send).toHaveBeenCalledTimes(1);
  });

  it("Should render the Modal component and perform its actions correctly when typeModal is 'warning'", () => {
    const props = {
      isOpen: true,
      typeModal: "warning",
      message: "Não é possível enviar pedido caso o resumo esteja vazio!",
      setModalOpen: jest.fn(),
      send: jest.fn(),
    };

    render(<Modal {...props} />);

    const btnClose = screen.getByRole("button");
    userEvent.click(btnClose);
    expect(props.setModalOpen).toHaveBeenCalledTimes(1);

    const imgWarning = screen.getByRole("img", { name: "Símbolo de alerta" });
    expect(imgWarning).toBeInTheDocument();

    const warningMessage = screen.getByText(props.message);
    expect(warningMessage).toBeInTheDocument();
  });

  it("Should render the Modal component and perform its actions correctly when typeModal is 'success'", () => {
    const props = {
      isOpen: true,
      typeModal: "sucess",
      message: "Pedido enviado com sucesso",
      setModalOpen: jest.fn(),
      send: jest.fn(),
    };

    render(<Modal {...props} />);

    const imgWarning = screen.getByRole("img", { name: "Marca de verificado com sucesso" });
    expect(imgWarning).toBeInTheDocument();

    const warningMessage = screen.getByText(props.message);
    expect(warningMessage).toBeInTheDocument();
  });

  it("Should not render anything when isOpen equals 'false'", () => {
    const props = {
      isOpen: false,
      typeModal: "",
      message: "",
      setModalOpen: jest.fn(),
      send: jest.fn(),
    };

    render(<Modal {...props} />);

    const imgWarning = screen.queryByRole("img", { name: "Marca de verificado com sucesso" });
    expect(imgWarning).toBeNull();
  });
});
