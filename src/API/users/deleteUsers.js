import {request} from '../request/request';
import { removeItem } from "../../storage/local";

export const deleteUser =  ( id ) =>  {
 
    const token = removeItem('token'); 

    return request( `users/${id}`, 'DELETE', {Authorization: `Bearer ${token}`})
};
