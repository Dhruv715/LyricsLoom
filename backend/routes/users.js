var express = require('express');
const { view_trending_songs, view_categories, user_register, user_login, create_play_list, add_playlist, one_song, view_albums, album_wise, view_playlist, view_category, AllSongs, getAllPlayLists, getPlayList, edit_playlist, deletePlaylist } = require('../controller/usercontroller');
var router = express.Router();

var cors = require('cors')
router.use(cors())

/* GET users listing. */
router.post('/', user_register)
router.post('/login', user_login)
router.get('/trending', view_trending_songs)
router.get('/songs', AllSongs)
router.get('/song/:id', one_song)
router.get("/view_category", view_categories)
router.get("/view_category/:id", view_category)
router.get('/albums', view_albums)
router.get('/albumsongs/:id', album_wise)
router.post('/createplaylist', create_play_list)
router.post('/getAllPlayLists', getAllPlayLists)
router.get('/getPlayList/:id', getPlayList)
router.post('/addplaylist/:id', add_playlist)
// router.get('playlist', view_playlist)
router.post('/editplaylist/:id',edit_playlist)
router.delete('/deletePlaylist/:id',deletePlaylist)
module.exports = router;
