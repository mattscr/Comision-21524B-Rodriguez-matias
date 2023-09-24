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
//lee de las variables de entorno y sino usa por defecto el puerto 3000
const PORT = process.env.PORT || 3000

app.use(express.json())
//se utiliza urlencoded para poder enviar datos de formularios de html
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))

app.set('view engine', 'ejs')
//definimos en que directorio se encuentran nuestras vistas
app.set('views', path.join(__dirname, 'views'))
//definimos donde vana  estar los archivos estaticos del proyecto (js,css)
app.use(express.static('public'))


// ruta para obtener todos los post
app.get('/', async (req,res) => {
    const post = await PostModel.findAll()
    res.render('index', {title: "Home", post: post.reverse() })
})
//ruta para crear un nuevo post
app.get('/nuevo-post', (req,res) =>{
    res.render('./nuevopost')
})
//ruta para actualizar un post mediante id
app.get('/actualizar-post/:id', async (req, res) => {
    const id = req.params.id
    const post = await PostModel.findByPk(id)
    res.render('actualizarpost', { post })
})

//rutas crud
app.use('/posts', require('../src/routes/posts.routes'))

app.listen(PORT, () => {
    //la funcion force = true elimina la tabla si es que ya existia.
    sequelize.sync({force: false})
        .then(() => console.log("db conectada"))
        .catch((error) => console.log(error))
    console.log(`Servidor en http://localhost:${PORT}`); 
})