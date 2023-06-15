const API_URL = 'https://burger-queen-api-mock-xi.vercel.app';

export const createOrder = async(orderTotal, selectValue, orderResume, clientName, AttendantName, token) => await fetch(`${API_URL}/orders`, {
method: 'POST',
headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
},
body: JSON.stringify({
    table: selectValue,
    userName: AttendantName,
    client: clientName,
    products: orderResume,
    orderTotal,
    status: 'pending',
    dataEntry: new Date()
})
});

