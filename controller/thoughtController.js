const { Thought, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thought.find()
            .then((Thoughts) => res.json(Thoughts))
            .catch((err) => res.status(500).json(err));
    }
}