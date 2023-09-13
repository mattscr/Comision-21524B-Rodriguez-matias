const { PostModel } = require ('../models/post')

const getAllPost = async (req, res) => {

    const allPost = await PostModel.findAll()

    res.json(allPost)
}

const getPostbyId = async (req, res) =>{
    const postId = await PostModel.findByPk(req.params.id)

    res.json(postId)
}

const crearNuevoPost = async (req, res) => {
    const { titulo, contenido, link_img } = req.body

    await PostModel.create({ titulo, contenido, link_img })

    res.send('post creado con exito')
}

const updatePost = async (req, res) => {
    const id = req.params.id
    const { titulo, contenido, link_img } = req.body

    await PostModel.update({ titulo, contenido, link_img }, {
        where: { id: id }
    })

    res.send('post editado con exito')
}

const deletePost = async (req, res) => {
    const id = req.params.id
    await PostModel.destroy({
        where : {id: id}
    })

    res.send('post eliminado con exito')
}
module.exports = {getAllPost, getPostbyId, crearNuevoPost, updatePost, deletePost}