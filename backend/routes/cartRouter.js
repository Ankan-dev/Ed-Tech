const express=require('express');
const router=express.Router();

const addToCart =require("../controllers/cart/addToCart.js")
const getCartDetails =require("../controllers/cart/getCartDetails.js")
const deleteCartItem =require("../controllers/cart/deleteCartItem.js")


router.post('/addToCart',addToCart);
router.get('/:id',getCartDetails);
router.delete('/:id',deleteCartItem);


module.exports=router