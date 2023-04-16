import { fileSize, rm } from '../config/fileSize.js'
import { Videos } from '../model/index.js'

Videos.sync({ force: false })

const admin = async (req, res) => {
    const user = await Videos.findAll({ where: { userId: req.user_id } })
    res.status(200).send({ data: user })
}

const video = async (req, res) => {
    const { title } = req.headers
    await Videos.create(
        {
            userId: req.user_id,
            name: title,
            video_title: req.file.filename,
            video_size: fileSize(req.file.filename)
        }
    )

    res.status(201).send({
        message: 'Video successfully added'
    })
}
const deleteVideo = async (req, res) => {
    const { id } = req.params
    const video = await Videos.findOne({ where: { id } })

    if (!video) {
        return res.status(404).send({
            message: 'Video not found'
        })
    }

    rm(video.video_title)

    await Videos.destroy({
        returning: true,
        plain: true,
        where: {
            id
        }
    })

    res.status(201).send({
        message: 'Video successfully deleted'
    })
}
const updateVideo = async (req, res) => {
    const { id } = req.params
    const video = await Videos.findOne({ where: { id } })
    if (!video) {
        return res.status(404).send({
            message: 'Video not found'
        })
    }

    await Videos.update({ name: req.headers.name }, {
        returning: false,
        where: { id }
    })

    res.status(201).send({
        message: 'Video successfully updated'
    })
}
export { admin, video, deleteVideo, updateVideo }
