const mongoose = require('mongoose');

const reactionSchema = new mongoose.Schema(
    {
        reactionId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: [
            {
                type: String,
                required: true,
            }
        ],
        createAt: {
            type: String,
            default: Date
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// Schema to create Thought model
const thoughtSchema = new mongoose.Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 250
        },
        createAt: {
            type: String,
            default: Date
        },
        username:[
            {
                type: String,
                required: true,
            }
        ],
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false,
    }
);

// get total count of reactions and replies on retrieval
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;