const express = require('express');
const { config, engine } = require('express-edge');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const DB_CONNECT = 'mongodb+srv://nimeshmehra:nodeexpress@nodeexpress.n5p8xb7.mongodb.net/test';
const productContoller = require('./controlles/serverController');

dotenv.config();

const connectParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
mongoose.connect(DB_CONNECT, connectParams)
.then((data) => {
    console.log('Connected');
})
.catch((err) => {
    console.log('Error');
});


const app = express();
app.use(engine);
app.use(express.static('ui'));
app.set('views', `${__dirname}/views`);

app.use(bodyparser.json());
// import routes
const productRoutes = require('./routes/product');

// Route middleware
app.use('/api/products', productRoutes);

app.post('/', productContoller.addNewProduct);

app.get('/', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/index.html'));
    response.render('index');
})

app.get('/about', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/about.html'));
    response.render('about');
});
app.get('/post', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/post.html'))
    response.render('post');
})
app.get('/contact', (request, response) => {
    // response.sendFile(path.resolve(__dirname, 'pages/contact.html'));
    response.render('contact');
})
app.listen(4000, () => {
    console.log('We are lisinging');
});