import { Router } from "express"
import { createUser, deleteUser, findAllUsers, updateUser } from "../controller/user.controler"
import { validade } from "../middlewares/validade.middleware"
import { CreateUserDTO, UpdateUserDTO } from "../dtos/user.dto"

const router = Router()

router.post('/', validade(CreateUserDTO), createUser)
router.get('/', findAllUsers)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)
router.patch('/:id', validade(UpdateUserDTO), updateUser)

export default router