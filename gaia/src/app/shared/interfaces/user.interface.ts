interface User {
    _id?: string,
    user: string,
    nome?: string,
    email?: string,
    admin?: boolean,
    senha?: string
}

export default User;