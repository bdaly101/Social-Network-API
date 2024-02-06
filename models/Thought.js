const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const thoughtSchema = new Schema(
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => timestamp.toLocaleString(), // Format timestamp on retrieval
      },
      username: {
        type: String,
        required: true,
        ref: 'user'
      },
      reactions: [reactionSchema], // Array of reactions (nested documents)
    },
    {
      toJSON: {
        virtuals: true, // Ensure virtuals are included when converting the document to JSON
        getters: true, // Ensure getters are applied
      },
      id: false, // Prevent the virtual `id` field from being added to the output
    }
  );
  
  // Virtual to get the count of reactions
  thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
  });
  
  const Thought = model('thought', thoughtSchema);
  
  module.exports = Thought;