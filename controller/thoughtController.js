const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .then((Thoughts) => res.json(Thoughts))
            .catch((err) => res.status(500).json(err));
    },


}