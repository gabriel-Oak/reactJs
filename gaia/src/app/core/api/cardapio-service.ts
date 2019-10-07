import { api } from './enviroment';
import axios from 'axios';
import Cardapio from '../../shared/interfaces/menu.interface';

const getMenus = () => {
    return axios.get(`${api.cardapio}`);
}

const setMenus = (menu: Cardapio) => {
    return axios.put(`${api.cardapio}`, menu);
}

export {
    getMenus,
    setMenus
}