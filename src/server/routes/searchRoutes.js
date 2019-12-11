const searchController = require('../controllers/searchController');

module.exports = (router) => {
    router.get('/search', searchController.handleSearch);
};
