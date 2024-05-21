const mongoose = require('mongoose');

const mySchema =new mongoose.Schema({
    Name:{
        type:String,
    },
}, { timestamps: true });

const Category = mongoose.model('Category', mySchema);

module.exports = Category;