import userLogin from "./login";
import "@testing-library/jest-dom/extend-expect";

describe("Users Login API", () => {
  it("Should login successfully and return the auth token", async () => {
    const authTokenMock = "mockAuthToken";
    const email = "example@example.com";
    const password = "123456";

    const loginData = {
      accessToken: authTokenMock,
    };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(loginData),
    });

    const result = await userLogin(email, password);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result).toEqual(loginData);
  });

  it.each([
    ["Cannot find user", "Usuário Inexistente"],
    ["Password is too short", "Senha muito curta"],
    ["Incorrect password", "Senha incorreta"],
    ["Email and password are required", "Email e senha são obrigatórios"],
    ["jwt malformed", "Acesso restrito para apenas pessoas autorizadas"],
    ["error", "error"],
  ])("Should return an error when login is unsuccessful", async (error, message) => {
    expect.assertions(2);

    const email = "example@example.com";
    const password = "12";

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue(error),
    });

    try {
      await userLogin(email, password);
    } catch (err) {
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(err.message).toEqual(message);
    }
  });
});
