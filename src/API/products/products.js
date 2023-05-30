const API_URL = 'http://localhost:8080';

export const getProducts = async (token) => await fetch(`${API_URL}/products`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
});