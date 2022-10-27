const router = require('express').Router();

const {
    getThoughts
} = require('../../controller/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts)// .post(createVideo);

module.exports = router;