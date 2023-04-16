import express from 'express'
const app = express()
import cors from 'cors'
import env from 'dotenv'
env.config()
const PORT = process.env.PORT || 4001

import auth from './middleware/middleware.js'
import user from './router/user.js'
import admin from './router/admin.js'

app.use(express.json())
app.use(cors())
app.use(auth)

app.use(user)
app.use(admin)


app.listen(PORT, () => {
    console.log('http://localhost:' + PORT + ' is running')
})