const Product = require('./../models/Products');

// Get All Products
const getAllProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({message: error});
    }
};

// Add new prodcut
const addNewProduct = async (req, res) => {
    const product = new Product({
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        details: req.body.details
    });
    try {
        const saveProduct = await product.save();
        res.send(saveProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Single Product
const getSingleProduct = async (req, res) => {
    try {
        const products = await Product.findById(req.params.id);
        res.json(products);
    } catch (error) {
        res.json({message: error});
    }
};

// Update Product
const UpdateProduct = async (req, res) => {
    try {
        const product = {
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            details: req.body.details
        }

        const updateProduct = await Product.findByIdAndUpdate(
            { _id: req.params.id },
            product
        )

        res.json(updateProduct);
    } catch (error) {
        res.json({message: error});
    }
};

// delete product
const deleteProduct = async (req, res) => {
    try {
        const products = await Product.findByIdAndDelete(req.params.id);
        res.json(products);
    } catch (error) {
        res.json({message: error});
    }
};

module.exports = {
    getAllProduct,
    addNewProduct,
    getSingleProduct,
    UpdateProduct,
    deleteProduct
}