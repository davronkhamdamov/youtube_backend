import { sequelize, DataTypes } from '../config/config.js'
import { UUIDV4 } from 'sequelize'

const Users = sequelize.define('users', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4()
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img_url: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
export default Users