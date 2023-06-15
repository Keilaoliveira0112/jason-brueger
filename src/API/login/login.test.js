import { userLogin } from './login';
import '@testing-library/jest-dom/extend-expect';

describe('API de Login dos Usuários', () => {
    const authTokenMock = 'mockAuthToken';
    const email = 'example@example.com';
    const password = '123456';

    it('deve fazer login com sucesso e retornar o token de autenticação', async () => {
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
});        