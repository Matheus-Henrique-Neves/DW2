import { createUserServices } from "../services/user.services"
import { Response, Request } from "express"

export const createUser = async (req: Request, res: Response) =>{
    try {
        const user = await createUserServices(req.body)
        return res.status(201).json(user)
    } catch (error) {
        return res.status(400).json({ mensagem: "erro ao cadastrar" })
    }
}