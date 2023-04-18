import { Users, Videos } from '../model/index.js';

const SignUp = async (req, res) => {
    const [name, password, img_url] = req.body
    const data = await Users.findOne({ where: { name } })
    if (data) {
        return res.status(405).send({
            message: "This user already registered"
        })
    }
    await Users.create({ name, password, img_url })

    res.status(201).send({
        message: 'User successfully added'
    })
}

const getData = async (req, res) => {

    const user = await Users.findOne({ where: { id: req.user_id } })

    const users = await Users.findAll()

    const videos = await Videos.findAll({
        include: [{
            model: Users,
            required: true
        }],
    })
    res.status(200).send({
        user: user,
        users: users,
        videos: videos
    })
}
export { SignUp, getData }
