const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('post_foro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}