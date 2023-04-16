import { sequelize, DataTypes } from '../config/config.js'
import { UUIDV4 } from 'sequelize'
const Videos = sequelize.define('videos', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4()
    },
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    video_size: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
export default Videos