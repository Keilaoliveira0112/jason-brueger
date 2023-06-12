const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const createOrder = async(selectValue, orderResume, clientName, AttendantName, token) => await fetch(`${API_URL}/orders`, {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
},
body: JSON.stringify({
    table: selectValue,
    attendamt: AttendantName,
    client: clientName,
    products: orderResume,
    status: 'Pendente',
    dataEntry: new Date().toLocaleString('pt-BR')
})
});

