const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

const PostModel = sequelize.define('post', {
    titulo: {
        type: DataTypes.STRING,
        unique: true,
        defaultValue : "Nuevo titulo"},
    contenido: {
        type: DataTypes.STRING,
        unique: false,
        defaultValue: "Nuevo post"

    },
    link_img: {
        type: DataTypes.STRING,
        unique:false
    }
})

module.exports = { PostModel }