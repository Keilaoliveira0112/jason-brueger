import {request} from '../request/request';
import {getItem} from '../../storage/local';

export const patchProducts = async (productId, name, price, type) => {
  const token = getItem('token');
  return request(`products/${productId}`, 'PATCH', {Authorization: `Bearer ${token}`}, {
    name,
    price,
    type
  })
}