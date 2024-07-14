const express = require('express');
const path = require('path');

const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const staticRouter = require('./routes/staticRouter');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb+srv://mohitkum1352:15364164@urlshortner.xh4pdly.mongodb.net/')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(err));

app.set("view engine", "ejs");
app.set('views', path.resolve("./views"));

app.use(express.json());

app.use("/", staticRouter);

app.get("/test", async (req, res) => {
    try {
        const allUrls = await URL.find({});
        return res.render('home', {
            urls: allUrls,
        });
    } catch (err) {
        console.error('Error fetching URLs:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            { shortId },
            { $push: { visitHistory: { timestamp: Date.now() } } },
            { new: true }
        );

        if (!entry) {
            return res.status(404).json({ error: 'URL not found' });
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error('Error processing short URL:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
