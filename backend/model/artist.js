var mongoose = require('mongoose')

var artist = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    albums: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "album"
    }
})

module.exports = mongoose.model("artist", artist)
