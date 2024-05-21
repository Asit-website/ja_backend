const express = require("express");

const {getCategory,postCategory} = require("../controllers/categoryController");

const router = express.Router();

router.get('/getCategory', async (req, res) => {
    const data = await getCategory({ ...req.query });
    res.json(data);
});

router.post('/postCategory', async (req, res) => {
    const data = await postCategory({ ...req.body });
    if (!data.status) {
        return res.status(400).json(data);
    }
    res.json(data);
});

module.exports = router;
