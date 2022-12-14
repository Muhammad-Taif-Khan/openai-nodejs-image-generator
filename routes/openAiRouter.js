const express = require('express');
const genImage = require('../controllers/genImageController.js')
const router = express.Router();


router.post('/genImage', genImage)


module.exports = router;