import User from '../shared/interfaces/user.interface';

const key = 'GAIA_AUTH_KEY';

export const isAuth = (): boolean => {
    return !!sessionStorage.getItem(key);
}

export const isAdmin = (): boolean => {
    if (!isAuth()) throw new Error('Usuário não autenticado');
    const user = getUser();
    return !!user.admin;
}

export const setUser = (user: User): void => {
    if (user.senha) delete user.senha;

    sessionStorage.setItem(
        key,
        JSON.stringify(user)
    )
}

export const getUser = (): User => {
    if (!isAuth()) {
        window.location.href = '/login'
        throw new Error('Usuário não autenticado');
    }
    const user: any = sessionStorage.getItem(key);
    return JSON.parse(user) as User;
}

export const logOut = (): void => {
    sessionStorage.removeItem(key);
    window.location.href = process.env.PUBLIC_URL + '/home';
}