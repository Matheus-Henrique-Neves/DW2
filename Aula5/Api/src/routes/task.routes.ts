import { Router } from "express"
import { validade } from "../middlewares/validade.middleware"
import { CreateTaskDTO, UpdateTaskDTO } from "../dtos/task.dto"
import { createTask, deleteTask, findAllTask, findTaskById, updateTask } from "../controller/task.controller"


const router = Router()

router.post('/', validade(CreateTaskDTO), createTask)
router.get('/', findAllTask)
router.get('/:id', findTaskById)
router.delete('/:id', deleteTask)
router.patch('/:id', validade(UpdateTaskDTO), updateTask)

export default router