const products = require('../../models/product-model.js');
const category_model = require('../../models/category-model.js');

const addProduct = async (req, res) => {
    const { creator, category, image, description, name, price, discount } = req.body;
    try {
        const createProduct = await products.create({ creator, category, image, description, name, price, discount });
        const findCategory = await category_model.findById(category);
        
        if (findCategory) {
            findCategory.products.push(createProduct._id);
            await findCategory.save();
        }

        res.json({ message: "Product created successfully", success: true });
    } catch (error) {
        console.error(error);  // It's good practice to log errors for debugging
        res.json({ message: "Product creation failed", success: false });
    }
}

module.exports = addProduct;
