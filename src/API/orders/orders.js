const API_URL = 'http://localhost:8080';

export const createOrder = async(orderResume, clientName, idAttendant, token) => await fetch(`${API_URL}/orders`, {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
},
body: JSON.stringify({
    userId: idAttendant,
    client: clientName,
    products: orderResume,
    status: 'Pendente',
    dataEntry: new Date().toLocaleString('pt-BR')
})
});
