const mongoose = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            }
        ],
        createAt: {
            type: Date,
            default: Date.now
            // getter method ot format the timestamp on query
        },
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property `friendCount` that gets the amount of friends a user has
// userSchema.virtual('friendCount')

// Initialize our User model
const Reaction = mongoose.model('Reaction', reactionSchema);

// const handleError = (err) => console.error(err);

module.exports = Reaction;