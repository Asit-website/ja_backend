const express = require("express");

const {getSubCategory,postSubCategory} = require("../controllers/subCategoryController");

const router = express.Router();

router.get('/getSubCate', async (req, res) => {
    const data = await getSubCategory({ ...req.query });
    res.json(data);
});

router.post('/postSubCate', async (req, res) => {
    const data = await postSubCategory({ ...req.body });
    if (!data.status) {
        return res.status(400).json(data);
    }
    res.json(data);
});

module.exports = router;
