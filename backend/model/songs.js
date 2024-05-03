var mongoose = require("mongoose")

var songs = new mongoose.Schema({
    name: {
        type : String
    },
    image: {
        type: String
    },
    album: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "album"
    },
    date: {
        type: Date,
        default: Date.now()
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artist"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
    },
    relesed: {
        type: Number
    },
    lyrics: {
        type: String
    },
    duration: {
        type: String
    },
    file: {
        type: String
    }
})

module.exports = mongoose.model("songs", songs)
