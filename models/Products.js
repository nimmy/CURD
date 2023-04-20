const mongooes = require('mongoose');

const produtSchema = new mongooes.Schema({
    title: String,
    price: String,
    image: String,
    details: String
})

module.exports = mongooes.model("Product", produtSchema);