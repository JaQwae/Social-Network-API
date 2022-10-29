const User = require('../models/user');

module.exports = {
    // displays all users
    getUsers(req, res) {
        User.find()
            // .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    // display one user
    getSingleUser(req, res) {
        User.findOne({ _id: req.params.userId })
            .populate({ path: 'friends', select: '-__v' })
            .select('-__v')
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },

    // create a new user
    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    // update a user
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : res.json(user)
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

    // delete a user
    deleteUser(req, res) {
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user with this id!' })
                    : User.findOneAndUpdate(
                        { user: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    ),
                res.json({ message: 'User successfully deleted!' })
            )
            .catch((err) => res.status(500).json(err));
    },

    // Adding a friend
    addAFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {$push: { friends: req.params.friendId } },
            {runValidators: true, new: true }
        )
        .populate({path: 'friends', select: ('-__v')})
        .select('-__v')
        .then((user) =>
            !user
                ? res.status(404).json({message: 'No User founded with this ID'})
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    },

    // Deleting a friend
    deletingAFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            {$pull: { friends: req.params.friendId } },
            {runValidators: true, new: true }
        )
        .then((user) =>
            !user
                ? res.status(404).json({message: 'No User founded with this ID'})
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err))
    }
}