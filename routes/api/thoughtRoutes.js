const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought
} = require('../../controller/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//  /api/thoughts/thoughts:id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)
module.exports = router;