import {request} from '../request/request';
import {getItem} from '../../storage/local';

export const deleteProducts = (ProductId) => {
  const token = getItem('token');
  return request(`products/${ProductId}`, 'DELETE', {Authorization: `Bearer ${token}`});
}