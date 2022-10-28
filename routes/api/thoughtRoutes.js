const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought
} = require('../../controller/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//  /api/thoughts/thoughts:id
router
    .route('/:thoughtId')
    .get(getSingleThought)
module.exports = router;