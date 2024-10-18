import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from "../repositories/user.repositories"

import { CreateUserDTO, UpdateUserDTO } from '../dtos/user.dto'
 
import * as bcrypt from 'bcrypt'
import * as jose from 'jose'

export const createUserService = async (data: CreateUserDTO) => {
    const user = await findUserByEmail(data.email)
    if(user) throw new Error('E-mail já cadastrado!')
    const password = await bcrypt.hash(data.password, 12)
    return await createUser({...data, password})
}

export const findAllUsersService = async () => {
    return await findAllUsers()
}

export const deleteUserService = async (id: number) => {
    const user = await findUserById(id)
    if (!user) throw new Error('Usuário não encontrado')
    return await deleteUser(id)
}

export const updateUserService = async (id: number, data: UpdateUserDTO) => {
    const user = await findUserById(id)
    if (!user) throw new Error('Usuário não encontrado')
    return await updateUser(user.id, data)
}

export const authUserService(email: string, password: string) {
    const user = await findUserByEmail(email)
    if(!user) throw new Error('Usuário ou Senhas invalidas')
    const isValid = await bcrypt.compare(password, user.password)
    if(!isValid) throw new Error('Usuário ou Senhas invalidas')
    
    const payload = {id: user.id, email: user.email}
    const secret = new TextEncoder().encode("otextosupersecretodesegurança")
    const alg = "HS256"

    const token = await new jose.SignJWT(payload)
    .setProtectedHeader({alg})
    .setIssuedAt()
    .setIssuer('http://localhost:3000')
    .setSubject("user")
    .setExpirationTime('1h')
    .sign(secret)

}