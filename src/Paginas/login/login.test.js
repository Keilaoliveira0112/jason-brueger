import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../login/Login";
import { userLogin } from "../../API/login/login";
import { useNavigate } from "react-router-dom";
import { setItem } from "../../storage/local";

jest.mock("../../API/login/login");
jest.mock("react-router-dom");
jest.mock("../../storage/local");

describe("Login Page", () => {
  it("Should redirect after successful login", async () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);
    userLogin.mockResolvedValueOnce({
      accessToken: "huhasud",
      user: {
        email: "atendente@email.com",
        id: 4,
        name: "Jason",
        role: "atendente"
      }
    });

    render(<Login />);

    const email = screen.getByPlaceholderText("Email");
    const senha = screen.getByPlaceholderText("Senha");
    const button = screen.getByRole("button");

    fireEvent.change(email, { target: { value: "texto@email.com" } });
    fireEvent.change(senha, { target: { value: "password" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/novo-pedido");
    });
    expect(userLogin).toHaveBeenCalledWith("texto@email.com", "password");
    expect(setItem).toHaveBeenCalledTimes(3);
    expect(setItem).toHaveBeenCalledWith("token", "huhasud");
    expect(setItem).toHaveBeenCalledWith("username", "Jason");
  });

  it("Should not redirect if login is in error", async () => {
    const newLogin = {
      email: "texto",
      senha: "123456"
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