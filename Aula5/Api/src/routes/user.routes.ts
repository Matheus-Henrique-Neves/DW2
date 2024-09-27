import {createUser} from "../controller/user.controler"
import { Router } from "express"

const router = Router()
router.post('/',createUser)
export default router