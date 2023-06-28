import { getProducts } from "./getProducts";

describe("API getProducts", () => {
  const authTokenMock = "mockAuthToken";
  it("Should perform a successful response and return an array of objects with product data", async () => {
    const productsData = [
      {
        id: 1,
        name: "Biscoitos da sorte dos perdedores",
        price: 7,
        quantity: 1,
        type: "Café da manhã"
      },
      {
        id: 5,
        name: "Hamburguer de cérebro humano",
        price: 15,
        quantity: 1,
        type: "Hamburguers"
      },
      {
        id: 10,
        name: "Bolsa de sangue gaseificada 500ml",
        price: 10,
        quantity: 1,
        type: "Bebidas"
      }
    ];

    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: jest.fn().mockResolvedValue(productsData)
    });

    const result = await getProducts(authTokenMock);

    expect(result).toEqual(productsData);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(result && typeof result === "object").toBe(true);
  });
});