const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true,
        unique:true
    }
})

module.exports = new mongoose.model("Blog", BlogSchema);
