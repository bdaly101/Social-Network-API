const { ObjectId } = require('mongoose').Types;
const { Thought, User } = require('../models');


module.exports = {
    
    async getUsers(req, res) {
      try {
        const users = await User.find().populate('thoughts').populate('friends');

        res.json(users);
      } catch (err) {
        console.log(err);
        return res.status(500).json(err);
      }
    },
    
    async getSingleUser(req, res) {
        try {
          const user = await User.findOne({ _id: req.params.userId })
            .populate('thoughts')
            .populate('friends');
    
          if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    
      // POST a new user
      async createUser(req, res) {
        try {
          const user = await User.create(req.body);
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    
      // PUT to update a user by its _id
      async updateUser(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            req.body,
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    
      // DELETE to remove user by its _id
      async deleteUser(req, res) {
        try {
          const user = await User.findOneAndDelete({ _id: req.params.userId });
    
          if (!user) {
            return res.status(404).json({ message: 'No user with this id!' });
          }
    
          // Bonus: Remove a user's associated thoughts when deleted.
          await Thought.deleteMany({ _id: { $in: user.thoughts } });
    
          res.json({ message: 'User and associated thoughts deleted!' });
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    
      // POST to add a new friend to a user's friend list
      async addFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      },
    
      // DELETE to remove a friend from a user's friend list
      async removeFriend(req, res) {
        try {
          const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
          );
    
          if (!user) {
            return res.status(404).json({ message: 'No user found with this id!' });
          }
    
          res.json(user);
        } catch (err) {
          console.log(err);
          res.status(500).json(err);
        }
      }
    };