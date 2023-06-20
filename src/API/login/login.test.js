import { userLogin } from './login';
import '@testing-library/jest-dom/extend-expect';

describe('API de Login dos Usuários', () => {
  it('Deve fazer login com sucesso e retornar o token de autenticação', async () => {
    const authTokenMock = 'mockAuthToken';
    const email = 'example@example.com';
    const password = '123456';

    const loginData = {
      accessToken: authTokenMock
    };
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(loginData)
    });

    const result = await userLogin(email, password);
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result).toEqual(loginData);
  });

  /* it('Deve retornar um erro quando o login não for realizado com sucesso', async () => {
    const email = 'example@example.com';
    const password = '12';

    const error = new Error('Password is too short');

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockRejectedValue(error)
    });

   // console.log(error); // Error: Password is too short
   // console.log(error.message); // Password is too short
    const result = await userLogin(email, password);
    //console.log('result', result)
    //console.log('result', result.thrown);
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result).toEqual(error.message);
  }); */

  
});        