import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("<List />", () => {
  it("Should render product list correctly", () => {
    const props = {
      name: "Batata frita",
      price: 1,
      onClick: jest.fn(),
    };
    render(<List {...props} />);

    const productList = screen.getByText(props.name);
    expect(productList).toBeInTheDocument();

    const priceList = screen.getByText(props.price);
    expect(priceList).toBeInTheDocument();

    const buttonAdd = screen.getByRole("button");
    userEvent.click(buttonAdd);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
