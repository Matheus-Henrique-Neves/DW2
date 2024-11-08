export interface IUser {
    id: number
    name: string
    email: string
}

export const getUsers = async (): Promise<IUser[]> => {
    const resposta = await fetch('http://localhost:3000/api/user')
    return await resposta.json()
}