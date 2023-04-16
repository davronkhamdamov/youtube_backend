import { Sequelize, DataTypes } from 'sequelize'
import pg from 'pg'


const sequelize = new Sequelize(process.env.ELEPHANTSQLURL)

sequelize
    .authenticate()
    .then(() => console.log('connected'))
    .catch(e => console.log(e))


export { DataTypes, sequelize }