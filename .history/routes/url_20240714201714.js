const express = require('express');
const { handleGenrateShortUrl, handleGetAnalytics } = require('../controllers/url');

const router = express.Router();
router.post('/', handleGenrateShortUrl);

router.get('/analytics/:shortId',han)

module.exports = router;