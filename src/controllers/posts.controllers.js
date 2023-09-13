const { PostModel } = require ('../models/post')

const getAllPost = async (req, res) => {

    const allPost = PostModel.findAll()

    res.json()
}