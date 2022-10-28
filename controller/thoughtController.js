const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((Thoughts) => res.json(Thoughts))
            .catch((err) => res.status(500).json(err));
    },

     // displays one thought
    getSingleThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json(err));
    },
    // create a new thought
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => res.status(500).json(err));
    },

}