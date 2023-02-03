const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    reminder: {
        type: Boolean,
        default: false
    }
})

const postModel = mongoose.model('postModel', postSchema);

module.exports = postModel;