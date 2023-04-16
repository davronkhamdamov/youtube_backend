import { Sequelize, DataTypes } from 'sequelize'
import pg from 'pg'


const sequelize = new Sequelize('postgres://tmkjiydk:b_NsfMfmYYZ5zlpGA1pcay814bjS-sh-@heffalump.db.elephantsql.com/tmkjiydk')

sequelize
    .authenticate()
    .then(() => console.log('connected'))
    .catch(e => console.log(e))


export { DataTypes, sequelize }