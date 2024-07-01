const products = require('../../models/product-model.js');

const deleteProductsById = async (req, res) => {
    let id = req.params.id;
    try {
        const deleteProducts = await products.findByIdAndDelete(id);

        if (!deleteProducts) {
            return res.json({ message: "Product not found", success: false });
        }

        res.json({ message: "Product deleted successfully", success: true});
    } catch (error) {
        if (error.name === 'CastError') {
            return res.json({ message: "Invalid product ID", success: false });
        }
        res.json({ message: error.message, success: false });
    }
}

module.exports = deleteProductsById;
