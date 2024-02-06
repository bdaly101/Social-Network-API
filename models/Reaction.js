const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Default value set to a new ObjectId
    },
    reactionBody: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true, // Username is required
      ref: 'user',
    },
    createdAt: {
      type: Date,
      default: Date.now, // Default value set to the current timestamp
      get: (timestamp) => timestamp.toLocaleString(), // Format timestamp on retrieval
    },
  },
  {
    toJSON: {
      getters: true, // Ensure getters are applied
    },
    id: false, // Prevent the virtual `id` field from being added to the output
  }
);

module.exports = reactionSchema;