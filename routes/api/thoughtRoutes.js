const router = require('express').Router();

const {
    getThoughts,
    createThought,
    getSingleThought,
    deleteThought,
    updateThought,
    createReaction
} = require('../../controller/thoughtController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

//  /api/thoughts/thoughts:id
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction)
module.exports = router;