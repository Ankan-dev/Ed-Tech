const mongoose = require('mongoose');
const cartModel = require('../../models/cart-model.js');

const addToCart = async (req, res) => {
    try {
        const {
            creator,
            category,
            product_id,
            image,
            description, // Ensure correct spelling
            name,
            price
        } = req.body;
        
        // Use 'new' keyword to create ObjectId
        const userId = new mongoose.Types.ObjectId('6683b3d5dc4c2a217c497817');
        
        // Use findOne with user field
        let cart = await cartModel.findOne({ user: userId });

        if (!cart) {
            // Use 'user' not 'userId' when creating a new cart
            cart = new cartModel({ user: userId, items: [] });
        }

        // Find index of the item with the same product_id in the cart
        const itemIndex = cart.items.findIndex((item) => item.product_id.toString() === product_id);
        
        if (itemIndex > -1) {
            res.json({ message: "Item already exists in the cart", success: false });
        } else {
            cart.items.push({
                creator,
                category,
                product_id,
                image,
                description, // Ensure correct spelling
                name,
                price
            });

            // Save the cart
            await cart.save();

            res.json({ message:"Element added to the cart", success: true });
        }

    } catch (error) {
        console.error(error); // Log the error for debugging
        res.json({ message: error.message, success: false });
    }
};

module.exports = addToCart;
