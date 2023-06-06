import { getProducts } from "./products";

describe('API dos Produtos', () => {
    it('deve verificar se get products foi chamado com os parâmetros corretos', async () => {
        const token = 'jfdksglj';
        const products = await getProducts(token);

        global.fetch = jest.fn();
        
        expect(products).toHaveBeenCalledTimes(1);
        expect(products).toHaveBeenCalledWith(token);
        expect(fetch).toHaveBeenCalledTimes(1);

    })
})