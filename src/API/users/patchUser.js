import {request} from '../request/request';
import {getItem} from '../../storage/local';

export const patchUser = ( id, newInfo) => {
    const token = getItem('token');

    return request( `users/${id}`, 'PATCH', {Authorization: `Bearer ${token}`}, {newInfo})
  
};