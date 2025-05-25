const express = require('express');
const router = express.Router();
const fileController = require('../../controller/FileUpload');
const imageController = require('../../controller/image');
const multer = require('multer');
const upload = multer({ dest: 'Utils/uploads/' });

router.post('/fileUpload',fileController.fileUpload);
router.post('/imageUpload',upload.single('file'),imageController.imageUpload);


module.exports = router;