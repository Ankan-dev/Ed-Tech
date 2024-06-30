const products = require('../../models/product-model.js');

const updateProductsById = async (req, res) => {
    let id = req.params.id;
    try {
        const updateProducts = await products.findByIdAndUpdate(id, req.body, { new: true });
        res.json({ message:"products updated successfully", success: true });
    } catch (error) {
        res.json({ message: error.message, success: false });
    }
}

module.exports=updateProductsById;