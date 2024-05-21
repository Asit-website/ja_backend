const Category = require("../models/Category");

const postCategory = async ({Name}) => {
    try {
        const category = new Category({
           Name
        });
        const savedCategory = await category.save();
        return { status: true, message: 'new category created', data: savedCategory };
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            message: "500"
        }
    }
}

const getCategory = async () => {
    let data = await Category.find();
    return { status: true, data };
};

module.exports = {
    postCategory,
    getCategory
}