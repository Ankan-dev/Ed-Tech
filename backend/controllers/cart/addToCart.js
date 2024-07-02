const cartModel = require('../../models/cart-model.js');

const addToCart = async (req, res) => {
    try {
        const {
            creator,
            category,
            product_id,
            image,
            desciption,
            name,
            price
        } = req.body;
        const userId = "6683b3d5dc4c2a217c497817";
        let cart = await cartModel.findById(userId);

        if (!cart) {
            cart = new cartModel({ userId, items: [] });
        }

        cart.items.push({
            creator,
            category,
            product_id,
            image,
            desciption,
            name,
            price
        });

        await cart.save();

        res.json({cartData:cart,success:true});
    } catch (error) {
        res.json({message:error.message,success:false});
    }



}

module.exports=addToCart;