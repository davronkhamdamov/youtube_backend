import { verify } from 'jsonwebtoken'

const auth = async (req, res, next) => {
    try {
        if (req.url === '/login' || req.url === '/signup') {
            return next()
        }
        const userId = verify(req.headers.token, process.env.JWT_SECRET)
        req.user_id = userId.id
        next()
    } catch (error) {
        return res.status(401).send({
            message: 'Invalid token'
        })
    }
}
export default auth