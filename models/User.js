const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      minlength: 4,
      match: [/.+\@.+\..+/, 'Please enter a valid email address'],
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'thought', // Ensure this matches the Thought model's name
        },
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'user', // Self-reference to the User model
        },
      ],
    },
    {
      toJSON: {
        virtuals: true, // Ensure virtuals are included when converting the document to JSON
      },
      id: false, // Prevent the virtual `id` field from being added to the output
    }
  );
  
  // Virtual to get the count of friends
  userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
  });
  
  const User = model('user', userSchema);
  
  module.exports = User;