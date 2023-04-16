import { Router } from 'express'
const rout = Router()
import { upload1 } from '../middleware/fileUpload.js'
import { admin, video, deleteVideo, updateVideo } from '../controller/youtube.js'

rout.get('/admin', admin)
rout.post('/video', upload1.single('file'), video)
rout.delete('/delete/:id', deleteVideo)
rout.put('/update/:id', updateVideo)

export default rout