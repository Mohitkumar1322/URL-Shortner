const express = require('express');
const { handleGenrateShortUrl,  } = require('../controllers/url');

const router = express.Router();
router.post('/', handleGenrateShortUrl);

router.get('/analytics/:shortId')

module.exports = router;