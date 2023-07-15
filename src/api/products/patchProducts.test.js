import patchProducts from "./patchProducts";

describe("API patchProduct", () => {
  const product = {
    id: 4,
    name: "Hamburguer de cérebro humano",
    price: 15,
    type: "Hamburguers",
    quantity: 1,
  };
  it("Should update the product successfully", async () => {
    const updatedProduct = {
      id: 4,
      name: "Hamburguer de cérebro humano",
      price: 10,
      type: "Hamburguers",
      quantity: 1,
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(updatedProduct),
    });

    const result = await patchProducts(product.id, updatedProduct);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(updatedProduct);
  });

  it.each([
    ["Cannot find user", "Usuário Inexistente"],
    ["Password is too short", "Senha muito curta"],
    ["Incorrect password", "Senha incorreta"],
    ["Email and password are required", "Email e senha são obrigatórios"],
    ["jwt malformed", "Acesso restrito para apenas pessoas autorizadas"],
    ["error", "error"],
  ])("Should return an error when requested product does not exist", async (error, message) => {
    expect.assertions(2);

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: jest.fn().mockResolvedValue(error),
    });

    try {
      await patchProducts(0, {});
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
