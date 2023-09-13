const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const ejs = require('ejs')
const { sequelize } = require('./database')
const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.listen(3000, () => {
    sequelize.authenticate()
        .then(() => {
            console.log("db conectada")
        })
        .catch((error) =>{
            console.log(error)
        })
    console.log('escuchando en puerto 3000')
})