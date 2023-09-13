const { PostModel } = require ('../models/post')

const getAllPost = async (req, res) => {

    const allPost = await PostModel.findAll()

    res.json(allPost)
}

const getPostbyId = async (req, res) =>{
    const postId = await PostModel.findByPk(req.params.id)

    res.json(postId)
}
module.exports = {getAllPost, getPostbyId}