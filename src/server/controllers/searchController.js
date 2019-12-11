const keys = require('../config/index');
const axios = require('axios');

module.exports.handleSearch = async (req, res) => {
    const searchValue = req.query.q;

    const endpoint = `https://api.opencagedata.com/geocode/v1/json?key=${keys.OPENCAGEDATA_API_KEY}&q=${searchValue}&pretty=1&countrycode=us`;
    const response = await axios.get(endpoint);
    const results = response.data.results;

    if (results && results.length > 0) {
        const { geometry } = results[0];
        return res.status(200).send({
            latitude: geometry.lat,
            longitude: geometry.lng
        });
    }

    return res.status(500);
};
