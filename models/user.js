const mongoose = require('mongoose');

const userSchema = new Schema(
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
        // ]
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