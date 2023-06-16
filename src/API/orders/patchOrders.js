const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const patchOrders = async (token, idOrder) => await fetch(`${API_URL}/orders/${idOrder}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
        status: "ready",
        dateProcessed: new Date()
    })
})