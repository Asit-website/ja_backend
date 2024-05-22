const express = require("express");

const {postVideo,getVideo} = require("../controllers/videoController");

const router = express.Router();

router.get('/getVideo', async (req, res) => {
    const data = await getVideo({ ...req.query });
    res.json(data);
});

router.post('/postVideo', async (req, res) => {
    const data = await postVideo({ ...req.body });
    if (!data.status) {
        return res.status(400).json(data);
    }
    res.json(data);
});

module.exports = router;
