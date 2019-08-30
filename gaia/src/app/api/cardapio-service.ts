import { api } from './enviroment';
import axios from 'axios';

const getMenus = () => {
    return axios.get(`${api.cardapio}`);
}

const setMenus = () => {
    return axios.get(`${api.cardapio}`);
}

export {
    getMenus,
    setMenus
}