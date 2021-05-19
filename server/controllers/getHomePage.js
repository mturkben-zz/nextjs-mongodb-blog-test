const Blog = require("../models/Blog");

const allBlog = async (req, res) => {
    
    try {
        const findAll = await Blog.find({})
        res.status(200).json({status: "OK", blogs: findAll})
    } catch (e) {
        res.status(403).json({status: "NO"})
    }
};


const getOneBlog = async (req, res) => {
    const {_id} = req.params;
    const findOne = await Blog.findOne({_id})
    if (findOne !== null) {
        res.status(200).json({status: "OK", blog: findOne})
    } else {
        res.status(403).json({status: "NO"}).end()
    }
    
}

module.exports = {
    allBlog,
    getOneBlog
}
