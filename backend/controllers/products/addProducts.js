const products = require('../../models/product-model.js');
const category_model = require('../../models/category-model.js');
const teacherModel = require('../../models/teacher-model.js');

const addProduct = async (req, res) => {
    const { category, image, description, name, price, discount } = req.body;
    const teacher = req.teacherModel;
    try {

        const findCategory = await category_model.findById(category);
        const findTeacher = await teacherModel.findById(teacher.id);

        if (!findCategory) {
            return res.json({
                message: "category not found",
                success: false
            })
        }

        if (!findTeacher) {
            return res.json({
                message: "Teacher not found",
                success: false
            })
        }

        const createProduct = await products.create({ creator: findTeacher._id, category, image, description, name, price, discount });

        findTeacher.Products.push(createProduct._id);
        await findTeacher.save({ validateBeforeSave: false });

        findCategory.products.push(createProduct._id);
        await findCategory.save({ validateBeforeSave: false });
        res.json({ message: "Product created successfully", success: true });
    } catch (error) {
        console.error(error);  // It's good practice to log errors for debugging
        res.json({ message: "Product creation failed", success: false });
    }
}

module.exports = addProduct;
