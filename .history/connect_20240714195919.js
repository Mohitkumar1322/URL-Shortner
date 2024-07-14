const mongoose = require('mongoose');
mongoose.set('strict', true);

async function connectToMongoDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
};