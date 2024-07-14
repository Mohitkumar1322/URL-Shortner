const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const { connect } = require('mongoose');
const URL = require('./models/url');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb+srv://mohitkum1352:15364164@urlshortner.xh4pdly.mongodb.net/')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

app.use(express.json());
app.use("/url", urlRoute);



app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const enetry = await URL.findOneAndUpdate({
        shortId
    },{$push: {
        visitHistory: {timestamp: Date.now()}
    }});
    res.redi

    });


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));