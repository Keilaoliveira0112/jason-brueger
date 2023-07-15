import {
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import userLogin from "../../api/login/login";
import { setItem } from "../../utils/localStorage";

jest.mock("../../api/login/login");
jest.mock("react-router-dom");
jest.mock("../../utils/localStorage");

describe("Login Page", () => {
  it("Should redirect to '/novo-pedido' page after successful login", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    userLogin.mockResolvedValueOnce({
      accessToken: "mockToken",
      user: {
        email: "teste@atendente.com",
        id: 4,
        name: "NomeCozinha",
        role: "atendente",
      },
    });

    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Senha");
    const button = screen.getByRole("button");

    fireEvent.change(email, { target: { value: "teste@atendente.com" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/novo-pedido");
    });
    expect(userLogin).toHaveBeenCalledWith("teste@atendente.com", "password");
    expect(setItem).toHaveBeenCalledTimes(3);
    expect(setItem).toHaveBeenCalledWith("token", "mockToken");
    expect(setItem).toHaveBeenCalledWith("username", "NomeCozinha");
  });

  it("Should redirect to '/pedidos-pendentes' page after successful login", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    userLogin.mockResolvedValueOnce({
      accessToken: "mockToken",
      user: {
        email: "teste@cozinha.com",
        id: 1,
        name: "NomeCozinha",
        role: "chefe de cozinha",
      },
    });

    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Senha");
    const button = screen.getByRole("button");

    fireEvent.change(email, { target: { value: "teste@cozinha.com" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/pedidos-pendentes");
    });
    expect(userLogin).toHaveBeenCalledWith("teste@cozinha.com", "password");
    expect(setItem).toHaveBeenCalledWith("username", "NomeCozinha");
  });

  it("Should redirect to '/colaboradores' page after successful login", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    userLogin.mockResolvedValueOnce({
      accessToken: "mockToken",
      user: {
        email: "teste@admin.com",
        id: 1,
        name: "NomeAdmin",
        role: "admin",
      },
    });

    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Senha");
    const button = screen.getByRole("button");

    fireEvent.change(email, { target: { value: "teste@admin.com" } });
    fireEvent.change(password, { target: { value: "password" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/colaboradores");
    });
    expect(userLogin).toHaveBeenCalledWith("teste@admin.com", "password");
    expect(setItem).toHaveBeenCalledWith("username", "NomeAdmin");
  });

  it("Should not redirect if login is in error", async () => {
    const newLogin = {
      email: "texto",
      senha: "123456",
    };

    const error = new Error("Ocorreu um erro");
    userLogin.mockRejectedValueOnce(error);

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Login />);
    const button = screen.getByRole("button");
    const email = screen.getByPlaceholderText("Email");
    const senha = screen.getByPlaceholderText("Senha");

    fireEvent.change(email, { target: { value: newLogin.email } });
    fireEvent.change(senha, { target: { value: newLogin.senha } });
    fireEvent.click(button);

    await waitFor(() => {
      const paragrafoError = screen.getByText(error.message);
      expect(paragrafoError).toBeInTheDocument();
    });
    expect(userLogin).toHaveBeenCalledWith(newLogin.email, newLogin.senha);
    expect(navigate).not.toHaveBeenCalled();
  });
});
