const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    const allurls = URL.find({});
    return res.render("home",{
        urls: allurls,
    });
});
module.exports = router;