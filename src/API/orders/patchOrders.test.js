import patchOrders from "./patchOrders";

describe("API createOrder", () => {
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

  it("Should successfully update the status of the order from pending to ready and return with the updated data", async () => {
    const orderUpdated = {
      id: 9,
      table: "001",
      userName: "NomeDoAtendente",
      client: "NomeDoCliente",
      products,
      orderTotal: 60,
      status: "ready",
      dataEntry: new Date(),
      dateProcessed: new Date(),
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(orderUpdated),
    });

    const result = await patchOrders(orderData.id);
    expect(result).toEqual(orderUpdated);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
