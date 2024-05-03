var express = require('express');
var router = express.Router();
const { image } = require('../utils/multer');
const { postImage, getAllImage, getImage, deleteImage, editImage } = require('../controllers/image.controllers')

router.post('/image', image.single('image_url'), postImage);
router.get('/images', getAllImage);
router.get('/image/:id', getImage);
router.delete('/image/d/:id', deleteImage);
router.put('/image/e/:id', editImage);

module.exports = router;