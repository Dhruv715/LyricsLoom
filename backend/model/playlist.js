var mongoose = require("mongoose")

var playlist = new mongoose.Schema({
    name : {
        type : String,
    },
    songs : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "songs"
    }],
    uid : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    description : {
        type : String
    }
})

module.exports = mongoose.model("playlist",playlist)
