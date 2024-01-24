import { Router } from "express"
import { getUsers, getUser, putUser, deleteUser, recoveryPassword, resetPassword, uploadFile, deleteInactivity, getUsersLimited } from "../controllers/users.controller.js"
import { passportError, authorization } from "../utils/messagesError.js";
import upload from "../config/multer.js";

const userRouter = Router()

userRouter.get('/', passportError('jwt'), authorization(['admin']), getUsers)
userRouter.get('/limited', passportError('jwt'), authorization(['admin']), getUsersLimited)
userRouter.get('/:id', passportError('jwt'), authorization(['admin']), getUser)
userRouter.put('/:id', passportError('jwt'), authorization(['admin']), putUser)
userRouter.delete('/inactivity', passportError('jwt'), authorization(['admin']), deleteInactivity)
userRouter.delete('/:id', passportError('jwt'), authorization(['admin']), deleteUser)
userRouter.post('/recovery-password', recoveryPassword)
userRouter.post('/reset-password/:token', resetPassword)
userRouter.post('/upload/profile/:id', upload.array('profileImage', 1), uploadFile)
userRouter.post('/upload/product/:id', upload.array('productImage', 4), uploadFile)
userRouter.post('/upload/document/:id', upload.array('document', 4), uploadFile)
userRouter.post('/upload/other/:id', upload.array('otherFile', 4), uploadFile)



export default userRouter