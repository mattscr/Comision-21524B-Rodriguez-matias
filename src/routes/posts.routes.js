const { Router } = require("express")
const { getAllPost, getPostbyId, crearNuevoPost, updatePost, deletePost } = require ('../controllers/posts.controllers')

const router = Router()

router.get('/', getAllPost)
router.get('/:id', getPostbyId)
router.post('/', crearNuevoPost)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)

module.exports = router