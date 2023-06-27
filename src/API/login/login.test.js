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
 
  it.each([
    ["Cannot find user", 'Usuário Inexistente'],
    ["Password is too short", 'Senha muito curta'],
    ["Incorrect password", 'Senha incorreta'],
    ["Email and password are required", 'Email e senha são obrigatórios'],
    ["jwt malformed", 'Acesso restrito para apenas pessoas autorizadas'],
    ["error", "error"]
  ])('Deve retornar um erro quando o login não for realizado com sucesso', async (error, message) => {
    expect.assertions(2);

    const email = 'example@example.com';
    const password = '12';

    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 400,
      json: jest.fn().mockResolvedValue(error)
    });

   // console.log(error); // Error: Password is too short
   // console.log(error.message); // Password is too short

    try{
      await userLogin(email, password);
    } catch(error){
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(error.message).toEqual(message);     
    }
    //console.log('result', result)
    //console.log('result', result.thrown);
    //expect(result).toEqual(error.message);
  });

  
});        