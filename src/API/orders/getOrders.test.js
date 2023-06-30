import getOrders from "./getOrders";

describe("API getOrders", () => {
  const products = [
    {
      id: 4,
      name: "Hamburguer de cérebro humano",
      price: 15,
      type: "Hamburguers",
      quantity: 2,
    },
    {
      id: 6,
      name: "Batatinha frita 123",
      price: 10,
      type: "Acompanhamentos",
      quantity: 3,
    },
  ];
  it("Should perform a successful response and return an array of objects with the order data", async () => {
    const orderData = {
      id: 9,
      table: "001",
      userName: "NomeDoAtendente",
      client: "NomeDoCliente",
      products,
      orderTotal: 60,
      status: "pending",
      dataEntry: new Date(),
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(orderData),
    });

    const result = await getOrders();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(orderData);
  });
});
