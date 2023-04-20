const mongoose = require('mongoose');

const Post = require('./database/models/Post');

mongoose.connect('mongodb+srv://nimeshmehra:nodeexpress@nodeexpress.n5p8xb7.mongodb.net/test');

Post.create({
    title: 'Fist blog',
    description: 'testing',
    content: 'dummy test here'
}, (err, post) => {
    console.log(err, post);
});