import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("<Input />", () => {
  it("Should render the input correctly", () => {
    render(<Input type="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Should check the type of input", () => {
    render(<Input type="email" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "email");
  });

  it("Should check the placeholder of input", () => {
    render(<Input placeholder="Email" />);

    const input = screen.getByPlaceholderText("Email");
    expect(input).toBeInTheDocument();
  });

  it("Should check if the user will be able to change the value of input", () => {
    render(<Input type="email" placeholder="Email" />);

    const input = screen.getByPlaceholderText("Email");
    expect(input).toBeInTheDocument();

    userEvent.type(input, "texto@email.com");
    expect(input).toHaveValue("texto@email.com");
  });
});
it("Should check the attribute name of input", () => {
  render(<Input name="email" />);

  const input = screen.getByRole("textbox");
  expect(input).toHaveAttribute("name", "email");
});

it("Should call onChange function on each key pressed", () => {
  const fn = jest.fn();
  render(<Input onChange={fn} />);

  const input = screen.getByRole("textbox");
  const value = "changed value";

  userEvent.type(input, value);
  expect(input.value).toBe(value);
  expect(fn).toHaveBeenCalledTimes(value.length);
});
