const API_URL = 'http://localhost:8080';
//função de enviar pedido para api
/* 1. userId do atendente
    2. Nome do cliente
    3. orderItem -> Resumo do pedido(id, preço, quantidade, nome, tipo)
    4. status; pendente;
    5. a data no momento
*/

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