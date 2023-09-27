const { DataTypes } = require('sequelize')
const { sequelize } = require('../database')

//Modelo de Post
const PostModel = sequelize.define('post', {
    titulo: {
        type: DataTypes.STRING,
        unique: false,
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

/*
Nota: para el campo ID y fecha de creacion utiliza las creada por defecto => id, createdAt, updatedAt
*/

module.exports = { PostModel }