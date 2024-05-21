const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const postSubCategory = async ({Name}) => {
    try {
        const Subategory = new SubCategory({
           Name, Category: req.Category.id
        });
        const savedSubCategory = await Subategory.save();
        return { status: true, message: 'new category created', data: savedSubCategory };
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            message: "500"
        }
    }
}

const getSubCategory = async () => {
    let data = await SubCategory.find();
    return { status: true, data };
};

module.exports = {
    postSubCategory,
    getSubCategory
}