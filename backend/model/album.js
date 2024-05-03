var mongoose = require("mongoose")

var album = new mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    songs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "songs"
    }],
    relesed: {
        type: Number
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist" 
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model("album", album)