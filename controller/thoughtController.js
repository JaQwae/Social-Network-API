const { Thought } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thought.find()
            .select('-__v')
            .then((thought) => res.json(thought))
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
            .then((thought) => res.json(thought))
            .catch((err) => res.status(500).json(err));
    },

    // update a thought
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // delete a thought
    deleteThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : Thought.findOneAndUpdate(
                        { thought: req.params.thoughtId },
                        { $pull: { thoughts: req.params.thoughtId } },
                        { new: true }
                    )
            )
            .then((thought) =>
                res.json({ message: 'Thought successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a reaction
    createReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .populate({ path: 'reactions', select: ('-__v') })
            .select('-__v')
            .then((reaction) =>
                res.json(reaction)
            )
            .catch((err) => {
                res.status(500).json(err)
            })
    },

    //  delete a reaction
    deleteReaction(req, res) {
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId } } },
            { runValidators: true, new: true }
        )
            .then((reaction) =>
            !reaction
                ?res.status(404).json({ message: "No reaction founded with this ID!" })
                : res.json(reaction)
            )
            .catch((err) => res.status(500).json(err)
            );
    }
}
