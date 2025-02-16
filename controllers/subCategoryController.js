const SubCategory = require("../models/SubCategory");

const postSubCategory = async ({Name,category}) => {
    try {
        const categoryi = new SubCategory({
           Name,category
        });
        const savedCategory = await categoryi.save();
        return { status: true, message: 'new subcategory created', data: savedCategory };
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            message: "500"
        }
    }
}

const getSubCategory = async ({ categoryId }) => {
    let and = [];
    if (categoryId && categoryId !== "" && categoryId !== "undefined") {
        and.push({ category: categoryId });
    }

    if (and.length === 0) {
        and.push({});
        return { status: true, data: [] };
    }

    const data = await SubCategory.find({ $and: and });
    return { status: true, data };
};

module.exports = {
   postSubCategory,
   getSubCategory
}