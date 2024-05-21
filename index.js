const express = require("express");
require('dotenv').config();
require('./db/conn');
const app = express();
const cors = require('cors');

const categoryRouter = require("./routes/categoryRouter");
const SubCategory = require("./models/SubCategory");

const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/category",categoryRouter);
app.use("/subCate",SubCategory);

app.get("/",(req,res)=>{
    res.send("hlw home");
});

app.listen(port, () => {
    console.log('Listening on ', port);
});
