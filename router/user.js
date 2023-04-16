import { Router } from 'express'
const rout = Router()

import { SignUp, getData } from '../controller/signup.js'
import Login from '../controller/login.js'
import { upload } from '../middleware/fileUpload.js'

rout.post('/signup', upload.single('file'), SignUp)
rout.post('/login', Login)
rout.get('/home', getData)

export default rout
