import { createTaskService, deleteTaskService, findAllTasksService, findTaskByIdService, updateTaskService } from "../services/task.services"
import { Request, Response } from 'express'

export const createTask = async (req: Request, res: Response) => {
    try {
        const user = await createTaskService(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const findAllTask = async (req: Request, res: Response) => {
    const users = await findAllTasksService()
    return res.status(200).json(users)
}

export const findTaskById = async (req: Request, res: Response) => {
    const task = await findTaskByIdService(Number(req.params.id))
    return res.status(200).json(task)
}

export const deleteTask = async (req: Request, res: Response) => {
    try {
        await deleteTaskService(Number(req.params.id))
        return res.status(200).json({msg: 'Usuário removido com sucesso'})
        // .status(204).send()
    } catch (error) {
        return res.status(400).json({error})
    }
}

export const updateTask = async (req: Request, res: Response) => {
    try {
        const user = await updateTaskService(Number(req.params.id),req.body)
        return res.status(200).json(user)
    } catch (error) {
        return res.status(400).json({error})
    }
}

