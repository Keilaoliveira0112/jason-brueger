import { createOrder } from "./orders";

describe("API createOrder", () => {
  const userName = "NomeDoAtendente";
  const orderTotal = 60;
  const table = "001";
  const products = [
    {
      id: 4,
      name: "Hamburguer de cérebro humano",
      price: 15,
      type: "Hamburguers",
      quantity: 2
    },
    {
      id: 6,
      name: "Batatinha frita 123",
      price: 10,
      type: "Acompanhamentos",
      quantity: 3
    }
  ];
  const client = "NomeDoCliente";
  it("Should successfully create an order and return with order data", async () => {
    const orderData = {
      table,
      userName,
      client,
      products,
      orderTotal,
      status: "pending",
      dataEntry: new Date()
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(orderData)
    });

    const result = await createOrder(orderTotal, table, products, client);

    expect(result).toEqual(orderData);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});