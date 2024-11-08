"use client"
import ButtonFatec from "@/components/button-fatec";
import Link from "next/link";
import { Itodo, getTodos } from "./api";
import { useEffect, useState } from "react";

export default function TodoList() {
    const [tarefas, setTarefas] = useState<Itodo[]>([])


    useEffect(() => {
        const fetchTodos = async () => {
            const listaTarefas = await getTodos()
            listaTarefas.splice(10)
            setTarefas(listaTarefas)
        }

        fetchTodos()
    }, [])
    return (
        <>
            <h1>Todo list</h1>
            <Link href="/"><span className="text-blue-500 hover:underline">Home</span></Link>
            <ButtonFatec text="clique aqui 1" />

            <hr />
            <ul>
                {
                    tarefas.map((tarefa) =>
                        (<li key={tarefa.id}>{tarefa.title}</li>))
                }
            </ul>

        </>
    )
}
