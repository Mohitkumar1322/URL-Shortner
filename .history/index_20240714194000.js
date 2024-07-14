const express = require('express');
const urlRoute = require('./routes/url');

const app = express();
const PORT = 8001;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));