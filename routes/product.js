const router = require('express').Router();
const productContoller = require('./../controlles/productController');

router.post('/', productContoller.addNewProduct);
router.get('/', productContoller.getAllProduct);
router.get('/:id', productContoller.getSingleProduct);
router.put('/:id', productContoller.UpdateProduct);
router.delete('/:id', productContoller.deleteProduct);


module.exports = router;