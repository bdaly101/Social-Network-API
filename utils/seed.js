const connection = require('../config/connection');
const { User, Thought, Friend } = require('../models');
const { getRandomName, getRandomEmail, getRandomThought, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    // Delete the collections if they exist
    let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('users');
    }

    let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtsCheck.length) {
        await connection.dropCollection('thoughts');
    }





    // Create empty array to hold the users
    const users = [];
    const allReactions = [];
    const thoughts = [];
    // Loop 20 times -- add users to the user array
    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = getRandomEmail();
        const reactionBody = getRandomReactions();
        allReactions.push({
            reactionBody,
            username,
        });
        users.push({
            username,
            email,
        });

    }
    let createdUsers = await User.collection.insertMany(users);
    
    let getCreatedUsers = await User.collection.find().toArray();
    console.log(getCreatedUsers);
    let userIds = getCreatedUsers.map(user => user._id)
    
    for (let i = 0; i < 20; i++) {
        const reactions = allReactions
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);
        const thoughtText = getRandomThought();
        const username = getCreatedUsers[Math.floor(Math.random() * getCreatedUsers.length)].username;
        thoughts.push({
            thoughtText,
            username,
            reactions
        });
    }

    await Thought.collection.insertMany(thoughts);

    let getCreatedThoughts = await Thought.collection.find().toArray();

    // Assign 5 random friends to each user
    for (let user of getCreatedUsers) {
        // Get a sample of 5 user IDs, excluding the current user's ID
        let friendSample = userIds
            .filter(id => !id.equals(user._id)) // Exclude the current user
            .sort(() => 0.5 - Math.random()) // Shuffle the array
            .slice(0, 5); // Take the first 5
        let thoughtSample = getCreatedThoughts
            .map(u => u._id)
            .sort(() => 0.5 - Math.random()) 
            .slice(0, 5); 
        // Update the user with the friend sample
        await User.findByIdAndUpdate(user._id, { $push: { friends: { $each: friendSample }, thoughts: { $each: thoughtSample } } });
        
    }

    console.log(userIds);

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});
