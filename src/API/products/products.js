const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const getProducts = async (token) => await fetch(`${API_URL}/products`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
});
