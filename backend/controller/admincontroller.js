const album = require("../model/album")
const artist = require("../model/artist")
var category = require("../model/category")
var songs = require("../model/songs")
const user = require("../model/user")

exports.add_category = async (req, res) => {
    req.body.image = req.file.originalname
    var data = await category.create(req.body)

    res.status(200).json({
        status: "category added",
        data
    })
}

exports.edit_category = async (req, res) => {
    var id = req.params.id
    var update = await category.findByIdAndUpdate(id, req.body)

    res.status(200).json({
        status: "category updated",
        update
    })
}

exports.delete_category = async (req, res) => {
    var id = req.params.id
    var data = await category.findByIdAndDelete(id)

    res.status(200).json({
        status: "category deleted",
        data
    })
}

exports.add_songs = async (req, res) => {
    req.body.image = req.files['image'][0].filename;
    req.body.file = req.files['file'][0].filename;

    var data = await songs.create(req.body)

    res.status(200).json({
        status: "songs added",
        data
    })
}

exports.edit_songs = async (req, res) => {
    var id = req.params.id
    var update = await songs.findByIdAndUpdate(id, req.body)

    res.status(200).json({
        status: "songs updated",
        update
    })
}

exports.delete_songs = async (req, res) => {
    var id = req.params.id
    var data = await songs.findByIdAndDelete(id)

    res.status(200).json({
        status: "songs updated",
        data
    })
}

exports.add_artist = async (req, res) => {
    req.body.image = req.file.originalname
    var data = await artist.create(req.body)

    res.status(200).json({
        status: "artist added",
        data
    })
}

exports.edit_artist = async (req, res) => {
    var id = req.params.id
    var update = await artist.findByIdAndUpdate(id, req.body)

    res.status(200).json({
        status: "category updated",
        update
    })
}

exports.delete_artist = async (req, res) => {
    var id = req.params.id
    var data = await artist.findByIdAndDelete(id)

    res.status(200).json({
        status: "songs updated",
        data
    })
}

exports.add_album = async (req, res) => {
    req.body.image = req.file.originalname
    var data = await album.create(req.body)

    res.status(200).json({
        status: "artist added",
        data
    })
}

exports.edit_album = async (req, res) => {
    var id = req.params.id
    var update = await album.findByIdAndUpdate(id, req.body)

    res.status(200).json({
        status: "category updated",
        update
    })
}

exports.delete_album = async (req, res) => {
    var id = req.params.id
    var data = await album.findByIdAndDelete(id)
    res.status(200).json({
        status: "songs updated",
        data
    })
}
