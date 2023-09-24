const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize (process.env.NAME_DB, process.env.USER_MYSQL, process.env.PASSWORD_MYSQL, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}