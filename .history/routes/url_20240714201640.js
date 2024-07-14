const express = require('express');
const { handleGenrateShortUrl } = require('../controllers/url');

const router = express.Router();
router.post('/', handleGenrateShortUrl);

router.get('/ana')

module.exports = router;