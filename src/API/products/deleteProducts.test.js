import deleteProducts from "./deleteProducts";

describe("API deleteProducts", () => {
  const productId = 5;
  it("Should successfully delete the product", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue({}),
    });

    const result = await deleteProducts(productId);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual({});
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
      await deleteProducts(productId);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
