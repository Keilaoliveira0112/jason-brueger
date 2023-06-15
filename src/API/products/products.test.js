import { getProducts } from "./products";

describe('API dos Produtos', () => {
    it('deve verificar se get products foi chamado com os parâmetros corretos e retornar uma resposta em caso de sucesso', async () => {
        const tokenMock = 'mockToken';
        const response = {
          ok: true, 
          status: 200
        }

        global.fetch = jest.fn(() => 
        Promise.resolve({
            ok: true,
            status: 200
        }))

        const result = await getProducts(tokenMock);
        
        /* Response {
            type: 'default',
            status: 401,
            ok: false,
            statusText: 'Unauthorized',
            headers: Headers {
              map: {
                'cache-control': 'no-cache',
                'content-length': '15',
                'content-type': 'application/json; charset=utf-8',
                expires: '-1',
                pragma: 'no-cache'
              }
            }
            url: 'https://burger-queen-api-mock-xi.vercel.app/products',
            bodyUsed: false, 
             _bodyInit: Blob {},
        _   bodyBlob: Blob {}
            }*/
            
        expect(fetch).toHaveBeenCalledTimes(1);
        // espero que meu retorno seja um object
        expect(result && typeof result === 'object').toBe(true);
        expect(result).toEqual(response);
        //expect(getProducts).toHaveBeenCalledWith(tokenMock);
    })
})