import patchUser from "./patchUser";
import { getItem } from "../../utils/localStorage";

jest.mock("../../utils/localStorage");

describe("API patchUser", () => {
  const mockUser = {
    id: 1,
    name: "NomeDoUsuário",
    email: "teste@teste.com",
    password: 123456,
    role: "admin",
  };
  it("Should update user successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(mockUser),
    });

    const result = await patchUser(mockUser.id, {
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
      role: mockUser.role,
    });

    expect(getItem).toHaveBeenCalledTimes(1);
    expect(getItem).toHaveBeenCalledWith("token");
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUser);
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
      await patchUser(mockUser.id, {
        name: mockUser.name,
        email: mockUser.email,
        password: mockUser.password,
        role: mockUser.role,
      });
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
