const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        thoughts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// get total count of friends on retrieval
userSchema.virtual("friendCount").get(function () {
    return this.friends.length;
});

// Initialize our User model
const User = mongoose.model('User', userSchema);

module.exports = User;