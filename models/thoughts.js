const mongoose = require('mongoose');

// Schema to create User model
const thoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 250
        },
        createAt: {
            type: Date,
            default: Date.now
            // getter method ot format the timestamp on query
        },
        username:[
            {
                type: Schema.Types.ObjectsId,
                ref: 'User'
            }
        ],
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// thoughtsSchema.virtual('reactionCount')

const Thoughts = mongoose.model('Thoughts', thoughtsSchema);

// const handleError = (err) => console.error(err);

module.exports = Thoughts;