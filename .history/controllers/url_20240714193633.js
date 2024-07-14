const { nonoid } = require('nonoid');
const URL = require('../models/url');

async function handleGenrateShortUrl(req, res) {
    const body = req.body;
    if(!body)

    const shortID = nanoid(8);
    await URL.create({
        shortId: shortID,
        redirectURL: req.body.redirectURL,
    });
    


}