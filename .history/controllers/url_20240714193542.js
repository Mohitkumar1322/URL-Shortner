const { nonoid } = require('nonoid');
const URL = require('../models/url');

async function handleGenrateShortUrl(req, res) {
    const shortID = nanoid(8);
    await URL.create({
        
    })


}