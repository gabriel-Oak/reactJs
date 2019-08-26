import { api } from './enviroment';
import axios from 'axios';
import User from '../shared/interfaces/user.interface';

const login = (user: User) => {
    return axios.post(`${api.user}${user.user}`, user);
}

export {
    login
}