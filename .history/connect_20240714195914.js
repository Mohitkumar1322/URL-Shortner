const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

async function connectToMongoDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
};