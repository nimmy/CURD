const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const DB_CONNECT = 'mongodb+srv://nimeshmehra:nodeexpress@nodeexpress.n5p8xb7.mongodb.net/?retryWrites=true&w=majority';
const app = express();

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
    console.log('Error', err);
});


app.use(bodyparser.json());
// import routes
const productRoutes = require('./routes/product');

// Route middleware
app.use('/api/products', productRoutes);

app.listen(4000, () => {
    console.log('We are lisinging');
});