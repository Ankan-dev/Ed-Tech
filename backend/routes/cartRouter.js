const express=require('express');
const router=express.Router();

const addToCart =require("../controllers/cart/addToCart.js")
const getCartDetails =require("../controllers/cart/getCartDetails.js")
const deleteCartItem =require("../controllers/cart/deleteCartItem.js")
const clearCart =require("../controllers/cart/clearCart.js")


router.post('/addToCart',addToCart);
router.get('/getCart/:id',getCartDetails);
router.delete('/deleteItem/:id',deleteCartItem);
router.delete('/clearCart',clearCart);


module.exports=router