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

// Schema to create Thought model
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

// get total count of reactions and replies on retrieval
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// Initialize our Thought model
const Thought = mongoose.model('Thought', thoughtSchema);


module.exports = Thought;