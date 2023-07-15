import createUsers from "./postUsers";
import { getItem } from "../../utils/localStorage";

jest.mock("../../utils/localStorage");
describe("API createUsers", () => {
  const mockUser = {
    name: "NomeDoUsuário",
    email: "teste@teste.com",
    password: 123456,
    role: "admin",
  };
  it("Should create user successfully", async () => {
    const userData = {
      id: 1,
      name: mockUser.name,
      email: mockUser.email,
      password: mockUser.password,
      role: mockUser.role,
    };

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(userData),
    });

    const result = await createUsers(mockUser.name, mockUser.email, mockUser.password, mockUser.role);
    expect(result).toEqual(userData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(getItem).toHaveBeenCalledTimes(1);
    expect(getItem).toHaveBeenCalledWith("token");
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
      await createUsers(mockUser.name, mockUser.email, mockUser.password, mockUser.role);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
