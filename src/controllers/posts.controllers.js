const { PostModel } = require ('../models/post')

const getAllPost = async (req, res) => {
    try {
        const allPost = await PostModel.findAll()

    res.json(allPost)
    } catch (error) {
        res.status(500).send('error al mostrar los post')
    }
    
}

const getPostbyId = async (req, res) =>{
    try {
        const postId = await PostModel.findByPk(req.params.id)

    res.json(postId)
    } catch (error) {
        res.status(500).send('error al mostrar post por ID')
    }
}

const crearNuevoPost = async (req, res) => {
    try {
        const { titulo, contenido, link_img } = req.body

    await PostModel.create({ titulo, contenido, link_img })

    res.status(201).send('post creado con exito')
    } catch (error) {
        res.status(500).send('error al crear post')
    }
}

const updatePost = async (req, res) => {
    try {
        const id = req.params.id
    const { titulo, contenido, link_img } = req.body

    await PostModel.update({ titulo, contenido, link_img }, {
        where: { id: id }
    })

    res.send('post editado con exito')
    } catch (error) {
        res.status(500).send('error al actualizar post')
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id
    await PostModel.destroy({
        where : {id: id}
    })

    res.send('post eliminado con exito')
    } catch (error) {
        res.status(500).send('error al eliminar')    
    }
}
module.exports = {getAllPost, getPostbyId, crearNuevoPost, updatePost, deletePost}