const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const getOrders = async (token) => await fetch(`${API_URL}/orders`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
})