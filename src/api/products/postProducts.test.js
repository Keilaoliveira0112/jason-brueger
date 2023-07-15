import createProduct from "./postProducts";

describe("API postProducts", () => {
  const name = "NomeDoProduto";
  const price = 3;
  const type = "Acompanhamentos";
  it("Should successfully create the product", async () => {
    const productData = {
      id: 12,
      name,
      price,
      quantity: 1,
      type,
    };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 201,
      json: jest.fn().mockResolvedValue(productData),
    });

    const result = await createProduct(name, price, type);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(productData);
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
      await createProduct(name, price, type);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
