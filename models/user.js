const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
    // thoughts: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'Thoughts',
    //     }
    // ],
    // friends: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User',
    //     }
    // ],
    lastAccessed: { type: Date, default: Date.now },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// userSchema.virtual('friendCount')

const User = mongoose.model('User', userSchema);

// const handleError = (err) => console.error(err);

module.exports = User;