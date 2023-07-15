import { render, screen, waitFor } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import getProducts from "../../../api/products/getProducts";
import createOrder from "../../../api/orders/orders";
import NewOrder from "./NewOrder";

jest.mock("../../../api/products/getProducts");
jest.mock("../../../api/orders/orders");
jest.mock("react-router-dom");

/* React.useEffect(() => {
        const func = async () => {
            const data = await getData();
            const value = await data.json();
            setData(value.title);
        }
        func();
    }, []) 
    
    return (
          <div>
            <div id="test">{data}</div>
            <div data-testid="test" id="test">{data}</div>
          </div>
      )*/

describe("New Order Page", () => {
  const productsData = [
    {
      id: 1,
      name: "Biscoitos da sorte dos perdedores",
      price: 7,
      quantity: 1,
      type: "Café da manhã",
    },
    {
      id: 5,
      name: "Hamburguer de cérebro humano",
      price: 15,
      quantity: 1,
      type: "Hamburguers",
    },
    {
      id: 10,
      name: "Bolsa de sangue gaseificada 500ml",
      price: 10,
      quantity: 1,
      type: "Bebidas",
    },
  ];
  it("deve renderizar os produtos", async () => {
    getProducts.mockResolvedValueOnce(productsData);
    render(<NewOrder />);
    expect(getProducts).toHaveBeenCalledTimes(1);
    await waitFor(() => {
      expect(screen.getByText("Hamburguer de cérebro humano")).toBeInTheDocument()
    })
    
  });
});