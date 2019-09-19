import { RouteProps } from 'react-router-dom';
import Cardapios from '../views/cardapio/Cardapios';
import Home from '../views/Home/Home';
import Login from '../views/login/Login';

const publicUrl = process.env.PUBLIC_URL;

export const commonRoutes: RouteProps[] = [
    { path: `${publicUrl}/login`, component: Login, exact: true },
    { path: `${publicUrl}/home`, component: Home, exact: true }
];

export const adminRoutes: RouteProps[] = [
    { path: `${publicUrl}/cardapios`, component: Cardapios, exact: true }
];