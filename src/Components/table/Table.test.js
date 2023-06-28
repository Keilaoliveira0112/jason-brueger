import Table from "./Table";
import { render, screen } from "@testing-library/react";

describe("<Table />", () => {
  it("Should render an order list correctly", () => {
    const props = {
      products: [{
        id: "hjksjka",
        name: "Batata frita",
        quantity: 1,
      }]
    };
    render(<Table {...props} />);

    const productTable = screen.getByText(props.products[0].name);
    expect(productTable).toBeInTheDocument();

    const quantityTable = screen.getByText(props.products[0].quantity);
    expect(quantityTable).toBeInTheDocument();
  });
});