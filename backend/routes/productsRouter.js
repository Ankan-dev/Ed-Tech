const express =require('express');
const router=express.Router();

const addProduct=require('../controllers/products/addProducts.js');
const {getAllProducts,getProductsById}=require('../controllers/products/getProducts.js');
const updateProductsById =require('../controllers/products/updateProducts.js');

router.post('/addProducts',addProduct);
router.get('/getAllProducts',getAllProducts);
router.get('/:id',getProductsById);
router.post('/update/:id',updateProductsById);

module.exports=router;