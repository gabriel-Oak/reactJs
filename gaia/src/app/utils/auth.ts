const key = 'GAIXA_AUTH_KEY';

interface User {
    id: string,
    name: string,
    email: string,
    admin: boolean,
    password?: string
}

export const isAuth = (): boolean => {
    return !!sessionStorage.getItem(key);
}

export const isAdmin = (): boolean => {
    if (!isAuth()) throw 'Usuário não autenticado';
    const user = getUser();
    return user.admin;
}

export const setUser = (user: User): void => {
    if (user.password) delete user.password;

    sessionStorage.setItem(
        key,
        JSON.stringify(user)
    )
}

export const getUser = (): User => {
    if (!isAuth()) {
        window.location.href = '/login'
        throw 'Usuário não autenticado';
    }
    const user: any = sessionStorage.getItem(key);
    return JSON.parse(user) as User;
}