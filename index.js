const express = require("express");
require('dotenv').config();
require('./db/conn');
const app = express();
const cors = require('cors');

const categoryRouter = require("./routes/categoryRouter");
const SubCategoryRouter = require("./routes/subCategoryRouter");
const videoRouter = require("./routes/videoRouter")
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/category",categoryRouter);
app.use("/subCate",SubCategoryRouter);
app.use("/video",videoRouter);

app.get("/",(req,res)=>{
    res.send("hlw home. this is the home things of the date");
});

app.listen(port, () => {
    console.log('Listening on ', port);
});
