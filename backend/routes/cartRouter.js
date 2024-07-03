const express=require('express');
const router=express.Router();

const addToCart =require("../controllers/cart/addToCart.js")
const getCartDetails =require("../controllers/cart/getCartDetails.js")
const deleteCartItem =require("../controllers/cart/deleteCartItem.js")
const clearCart =require("../controllers/cart/clearCart.js")
const authentication =require("../middleware/auth.js");


router.post('/addToCart',authentication,addToCart);
router.get('/getCart/:id',authentication,getCartDetails);
router.delete('/deleteItem/:id',authentication,deleteCartItem);
router.delete('/clearCart',authentication,clearCart);


module.exports=router