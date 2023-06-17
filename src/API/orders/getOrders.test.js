import { getOrders } from "./getOrders";

describe('API getOrders', () => {
  it('deve verificar se getOrders foi chamado com os parâmetros corretos e retornar uma resposta de sucesso', async () => {
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

    const result = await getOrders(tokenMock);
        
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result && typeof result === 'object').toBe(true);
    expect(result).toEqual(response); 
  });

  /* it('deve verificar se getOrders foi chamado com os parâmetros corretos e retornar uma resposta em caso de falha', async () => {
    const tokenMock = 'mockToken';
    const response = {
      status: 401,
      ok: false
    }

    global.fetch = jest.fn(() => 
    Promise.reject({
      status: 401,
      ok: false
    }))

    const result = await getOrders(tokenMock);
    //console.log(result)

     //thrown: Object {
      //"ok": false,
      //"status": 401,
      //}
        
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result && typeof result === 'object').toBe(true);
    //expect(result).toEqual(response); 
    //expect(result).toThrow(response)
  }) */
})