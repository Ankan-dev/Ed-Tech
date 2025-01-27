const products = require('../../models/product-model.js');

const updateProductsById = async (req, res) => {
    let id = req.params.id;
    try {
        const updateProducts = await products.findByIdAndUpdate(id, req.body, { new: true });

        if (!updateProducts) {
            return res.json({ message: "Product not found", success: false });
        }

        res.json({ message: "Product updated successfully", success: true});
    } catch (error) {
        if (error.name === 'CastError') {
            return res.json({ message: "Invalid product ID", success: false });
        }
        res.json({ message: error.message, success: false });
    }
}

module.exports = updateProductsById;
