const express = require('express');
const searchRoutes = require('./searchRoutes');

const router = express.Router();
searchRoutes(router);

module.exports = router;
