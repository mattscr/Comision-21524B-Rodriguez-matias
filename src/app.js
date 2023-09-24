const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const ejs = require('ejs')
const { sequelize } = require('./database')
require('./models/post')
const path = require('node:path')
const { PostModel } = require('./models/post')
const { log } = require('node:console')
require('dotenv').config();



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'))



app.get('/', async (req,res) => {
    const post = await PostModel.findAll()
    res.render('index', {title: "Home", post: post.reverse() })
})
app.get('/nuevo-post', (req,res) =>{
    res.render('./nuevopost')
})
app.get('/actualizar-post/:id', async (req, res) => {
    const id = req.params.id
    const post = await PostModel.findByPk(id)
    res.render('actualizarpost', { post })
})

app.use('/posts', require('../src/routes/posts.routes'))

app.listen(3000, () => {
    sequelize.sync({force: false})
        .then(() => console.log("db conectada"))
        .catch((error) => console.log(error))
    console.log('escuchando en puerto 3000, http://localhost:3000')
})