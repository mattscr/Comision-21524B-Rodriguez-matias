const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const ejs = require('ejs')
const { sequelize } = require('./database')
require('./models/post')
const path = require('node:path')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))
app.get('/', (req,res) => {
    res.render('index', {title: "Home" })
})

app.use('/posts', require('../src/routes/posts.routes'))

app.listen(3000, () => {
    sequelize.sync()
        .then(() => console.log("db conectada"))
        .catch((error) => console.log(error))
    console.log('escuchando en puerto 3000')
})