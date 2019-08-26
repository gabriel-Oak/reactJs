import { RouteProps } from 'react-router-dom';
import Home from '../views/Home/Home';

const publicUrl = process.env.PUBLIC_URL;

export const commonRoutes: RouteProps[] = [
    { path: `${publicUrl}/cardapio`, component: Home, exact: true }
];

export const adminRoutes: RouteProps[] = [
    
];