var songs = require("../model/songs");
var artist = require("../model/artist");
var album = require("../model/album");
var category = require("../model/category");
var user = require("../model/user");
var jwt = require("jsonwebtoken");
var playlist = require("../model/playlist");
var songs = require("../model/songs");

exports.user_register = async (req, res) => {
  var data = await user.find({ email: req.body.email });

  if (data.length == 0) {
    var data = await user.create(req.body);
    res.status(200).json({
      status: "register  successfully",
      data,
    });
  } else {
    res.status(200).json({
      status: "user already exist",
    });
  }
};

exports.user_login = async (req, res) => {
  var data = await user.find({ email: req.body.email });

  if (data.length == 1) {
    if (data[0].password == req.body.password) {
      var token = jwt.sign({ id: data[0].id }, "cdmi");

      res.status(200).json({
        status: "login succesfully",
        token,
      });
    } else {
      res.status(200).json({
        status: "wrong password",
      });
    }
  } else {
    res.status(200).json({
      status: "user does not exist",
    });
  }
};

exports.view_trending_songs = async (req, res) => {
  var data = await songs.find().sort("relesed");

  res.status(200).json({
    status: "songs are added",
    data,
  });
};

exports.one_song = async (req, res) => {
  var id = req.params.id;

  var data = await songs.findById(id);
  res.status(200).json({
    status: "song selected",
    data,
  });
};

exports.AllSongs = async (req, res) => {
  var data = await songs.find();
  res.status(200).json({
    status: "song selected",
    songs: data,
  });
};

exports.view_categories = async (req, res) => {
  var data = await category.find();

  res.status(200).json({
    status: "songs are added",
    data,
  });
};

exports.view_category = async (req, res) => {
  var data = await category.findById(req.params.id);
  var catSongs = await songs.find({ category: req.params.id });

  res.status(200).json({
    status: "songs are added",
    data,
    catSongs,
  });
};

exports.view_albums = async (req, res) => {
  var data = await album.find().sort("relesed");

  res.status(200).json({
    status: "songs are added",
    data,
  });
};

exports.album_wise = async (req, res) => {
  var id = req.params.id;
  var data = await album.findById(id).populate("songs");

  res.status(200).json({
    status: "album wise songs",
    data,
  });
};

exports.song_categories_wise = async (req, res) => {
  var c_id = req.params.c_id;

  var data = await songs.find({ category: c_id });
  res.status(200).json({
    status: "songs are viewed",
    data,
  });
};

exports.create_play_list = async (req, res) => {
  var uid = await jwt.verify(req.body.headers.auth, "cdmi");
  req.body.body.uid = uid.id;
  var data = await playlist.create(req.body.body);
  res.status(200).json({
    status: "playlist is added",
    data,
  });
};


exports.getAllPlayLists = async (req, res) => {

  const token = req.body.headers.auth // Extract token from Authorization header
  const uid = await jwt.verify(token, "cdmi"); // Verify and decode the token
  const data = await playlist.find({ uid: uid.id }); // Find playlists associated with the user
  // console.log('token', token);
  res.status(200).json({
    status: "playlist found",
    data,
  });
};

exports.getPlayList = async (req, res) => {

  var data = await playlist.findById(req.params.id).populate('songs');
  res.status(200).json({
    status: "playlist found",
    data,
  });
};



exports.add_playlist = async (req, res) => {
  var uid = await jwt.verify(req.headers.auth, "cdmi");

  var id = req.body.id;

  var s_id = req.params.id;

  var select = await playlist.find({ $and: [{ _id: id }, { uid: uid.id }] });
  var d = select[0].songs;
  d.push(s_id);

  var data = await playlist.findOneAndUpdate(
    { $and: [{ _id: id }, { uid: uid.id }] },
    { $set: { songs: d } }
  );

  res.status(200).json({
    status: "playlist updated",
    data,
  });
};

exports.edit_playlist = async (req, res) => {
  var id = req.params.id
  var data = await playlist.findByIdAndUpdate(id, req.body)

  res.status(200).json({
    status: "updated",
    data
  })
}

exports.deletePlaylist = async (req, res) => {
  const id = req.params.id
  var data = await playlist.findByIdAndDelete(id)
  res.status(200).json(
    {
      status: 'deleted'
    }
  )

}