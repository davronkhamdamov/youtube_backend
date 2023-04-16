import jwt from 'jsonwebtoken'

import { Users } from '../model/index.js'

Users.sync({ force: false })

const Login = async (req, res) => {
    const { name, password } = req.body
    const data = await Users.findOne({ where: { name } });
    if (!data) {
        return res.status(400).send({
            message: 'Name does not exist'
        })
    } else if (data.password !== password) {
        return res.status(400).send({
            message: 'Password not valid'
        })
    }
    const token = jwt.sign({ id: data.id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRATION
    })
    res.status(200).send({
        token
    })
}
export default Login
