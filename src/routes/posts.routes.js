const { Router } = require("express")
const { getAllPost, getPostbyId, crearNuevoPost, updatePost, deletePost } = require ('../controllers/posts.controllers')

const router = Router()
//rutas CRUD con su respectivo controlador
router.get('/', getAllPost)
router.get('/:id', getPostbyId)
router.post('/', crearNuevoPost)
router.post('/actualizar/:id', updatePost)
router.get('/eliminar-post/:id', deletePost)

module.exports = router