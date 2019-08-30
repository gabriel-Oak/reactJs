
import { api } from './enviroment';
import axios from 'axios';

const postChange = (troca: any) => {
    return axios.post(`${api.troca}`, troca);
}

const putChange = (troca: any) => {
    return axios.put(`${api.troca}`, troca);
}

const getTrocasUser = (id?: string) => {
    return axios.post(`${api.troca}/user`, {user: id});
}

export {
    postChange,
    putChange,
    getTrocasUser
}