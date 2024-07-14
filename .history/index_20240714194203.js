const express = require('express');
const { connectToMongoDB } = require('./connect');
const urlRoute = require('./routes/url');
const { connect } = require('mongoose');

const app = express();
const PORT = 8001;

connect

app.use("/url", urlRoute);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));