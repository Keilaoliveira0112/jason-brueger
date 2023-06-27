import {request} from '../request/request';
import {getItem} from '../../storage/local';

export const patchProducts = async (productId, updateProduct) => {
  const token = getItem('token');
  return request(`products/${productId}`, 'PATCH', {Authorization: `Bearer ${token}`}, updateProduct)}