const { Router } = require("express")
const { getAllPost, getPostbyId } = require ('../controllers/posts.controllers')

const router = Router()

router.get('/', getAllPost)
router.get('/:id', getPostbyId)

module.exports = router