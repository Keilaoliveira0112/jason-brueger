const API_URL = 'http://localhost:8080';

export const getOrders = async (token) => await fetch(`${API_URL}/orders`, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  },
})