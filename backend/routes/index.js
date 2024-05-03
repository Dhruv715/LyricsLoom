var express = require('express');
const { add_category, add_songs, edit_category, add_artist, add_user, delete_category, edit_songs, delete_songs, edit_artist, delete_artist, add_album, edit_album, delete_album } = require('../controller/admincontroller');
var router = express.Router();
var cors = require('cors')
router.use(cors())

// multer
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage })


/* GET home page. */
router.get('/', (req, res) => res.send('hello'))

router.post('/add_category',upload.single('image'),add_category)
router.post('/edit_category/:id', edit_category)
router.get('/delete_cateory/:id',delete_category)
router.post('/add_songs',upload.fields([{name:'image'},{name: 'file'}]),add_songs)
router.post('/edit_songs/:id',edit_songs)
router.post('/delete_songs/:id',delete_songs)
router.post('/add_artist',upload.single('image'),add_artist)
router.post('/edit_artist/:id',edit_artist)
router.get('/delete_artist/:id',delete_artist)
router.post('/add_album',upload.single('image'),add_album)
router.post('/edit_album/:id',edit_album)
router.get('/delete_album/:id',delete_album)

module.exports = router;


