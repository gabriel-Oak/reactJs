import { RouteProps } from 'react-router-dom';

import Cardapios from '../views/cardapio/Cardapios';
import CadastroUsuario from '../views/cadastro-usuario/CadastroUsuario';
import Login from '../views/login/Login';
import Home from '../views/Home/Home';
import NotFound from '../views/not-found/not-found';
import { isAuth } from '../utils/auth';

const publicUrl = process.env.PUBLIC_URL;

const getAdminRoutes = (): RouteProps[] => {
    const routes = isAuth()
        ? [
            { path: `${publicUrl}/cardapios`, component: Cardapios, exact: true },
            { path: `${publicUrl}/cadastrar-usuario`, component: CadastroUsuario, exact: true }
        ] : [];
    return routes;
}

export const commonRoutes: RouteProps[] = [
    { path: `${publicUrl}/login`, component: Login, exact: true },
    { path: `${publicUrl}/home`, component: Home, exact: true },
    ...getAdminRoutes(),
    { path: `${publicUrl}/not-found`, component: NotFound, exact: true }
];
