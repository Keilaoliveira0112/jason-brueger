import getProducts from "./getProducts";

describe("API getProducts", () => {
  it("Should perform a successful response and return an array of objects with product data", async () => {
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

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(productsData),
    });

    const result = await getProducts();

    expect(result).toEqual(productsData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result && typeof result === "object").toBe(true);
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
      await getProducts();
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
