const keys = require('../config/index');
const axios = require('axios');

module.exports.handleSearch = async (req, res) => {
    const searchValue = req.query.q;

    // find coordinates of searchValue

    res.status(200);
};
