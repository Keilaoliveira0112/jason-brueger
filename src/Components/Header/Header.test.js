import { render, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { removeItem } from "../../utils/localStorage";

jest.mock("react-router-dom");
jest.mock("../../utils/localStorage");

describe("<Header />", () => {
  it("Should render Header and perform your actions correctly", () => {
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Header />);
    expect(screen.getByRole("img", { name: "logo jason brueger" })).toBeInTheDocument();
    expect(screen.getAllByRole("button")).toHaveLength(2);
    const logout = screen.getByAltText("botão de sair");
    expect(logout).toBeInTheDocument();

    userEvent.click(logout);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith("/");
    expect(removeItem).toHaveBeenCalledTimes(1);
    expect(removeItem).toHaveBeenCalledWith("token");
  });
});
