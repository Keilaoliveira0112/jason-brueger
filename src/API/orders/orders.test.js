import createOrder from "./orders";

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
  const client = "NomeDoCliente";
  it("Should successfully create an order and return with order data", async () => {
    const orderData = {
      table,
      userName,
      client,
      products,
      orderTotal,
      status: "pending",
      dataEntry: new Date(),
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: jest.fn().mockResolvedValue(orderData),
    });

    const result = await createOrder(orderTotal, table, products, client);

    expect(result).toEqual(orderData);
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
      await createOrder(orderTotal, table, products, client);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
