const shortid = require('shortid');
const URL = require('../models/url');

async function handleGenrateShortUrl(req, res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: 'URL is required'});

    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitedHistory: [],

    });

    return res.json({ id: shortID });
}
async function handleGetAnalytics(req,res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalclicks: result.visitHistory.length,analytics: result.visitHistory});

}

module.exports = {
    handleGenrateShortUrl,
    handleGetAnalytics,
};
