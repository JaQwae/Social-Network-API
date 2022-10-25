const mongoose = require('mongoose');

// Schema to create User model
const thoughtSchema = new Schema(
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

// Create a virtual property `reactionCount` that gets the amount of reactions a thought has
// thoughtSchema.virtual('reactionCount')

// Initialize our Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

// const handleError = (err) => console.error(err);

module.exports = Thought;