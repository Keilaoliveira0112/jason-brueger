import getUsers from "./getUsers";

describe("API getUsers", () => {
  it("Should perform a successful response and return an array of objects with user data", async () => {
    const userData = [
      {
        email: "teste1@teste.com",
        password: "$2a$10$gVkmcWdnwEBxXj2PWjuv9uDx7BfjiAobbabDAOrH2o8b1i3E7KwR.",
        name: "Teste 1",
        role: "admin",
        id: 1,
      },
      {
        email: "teste2@teste.com",
        password: "$2a$10$JABwR1UAtJqr2DCJ41ypMOgOqlh8eRXmTBO6DXfKG3ybxhABY4rey",
        name: "Teste 2",
        role: "admin",
        id: 2,
      },
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(userData),
    });

    const result = await getUsers();

    expect(result).toEqual(userData);
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
      await getUsers();
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
