const router = require('express').Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../controller/userController');

// get all users, or create a user, /api/users
router.route('/').get(getUsers).post(createUser);

// get a single user, /api/users/:userId
router
    .route('/:userId')
    .get(getSingleUser)
    .delete(deleteUser);

module.exports = router;