import {request} from '../request/request';
import {getItem} from '../../storage/local';

export const patchOrders = async (idOrder) => {
  const token = getItem('token');
  return request(`orders/${idOrder}`, 'PATCH', {Authorization: `Bearer ${token}`}, {
    status: "ready",
    dateProcessed: new Date()
  })
}