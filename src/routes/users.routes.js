

import { Router } from "express";
import {getAllUsers , getUserById , createUserController, loginUser, updateUserController} from "../controller/users.controller.js"
import { checkAdmin, verifyToken } from "../middlewares/authJWT.js";

const router = Router()

router.get('/', verifyToken, checkAdmin, getAllUsers);
router.get('/:id',getUserById);


router.post('/' ,createUserController);
router.post('/login',loginUser)

router.put('/:id', updateUserController);


export default router