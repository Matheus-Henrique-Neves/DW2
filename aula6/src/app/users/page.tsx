"use client"
import { useEffect, useState } from "react"
import { IUser, getUsers } from "./api"

export default function Users(){
    const [listaUsers,setListaUsers] = useState<IUser[]>([])
    
    useEffect(() => {
        const fetchUsers = async () => {
            const lista = await getUsers()
            setListaUsers(lista)
        }

        fetchUsers()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1>Lista de usuários</h1>
            {
                listaUsers.map((user)=>(
                    <div key={user.id}>{user.name} - {user.email}</div>
                ))
            }
        </div>
    )
}