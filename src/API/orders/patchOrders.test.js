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

  it.each([
    ["Cannot find user", "Usuário Inexistente"],
    ["Password is too short", "Senha muito curta"],
    ["Incorrect password", "Senha incorreta"],
    ["Email and password are required", "Email e senha são obrigatórios"],
    ["jwt malformed", "Acesso restrito para apenas pessoas autorizadas"],
    ["error", "error"],
  ])("Should return an error when not providing the auth token", async (error, message) => {
    expect.assertions(2);

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: jest.fn().mockResolvedValue(error),
    });

    try {
      await patchOrders(orderData.id);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
