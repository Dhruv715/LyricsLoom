var mongoose = require("mongoose")

var category = new mongoose.Schema({
    name : {
        type : String
    },
    image : {
        type : String
    }
})

module.exports = mongoose.model('category',category)