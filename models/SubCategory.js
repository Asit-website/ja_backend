const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }],
    Name:{
        type:String,
    },
}, { timestamps: true });

const SubCategory = mongoose.model('SubCategory', mySchema);

module.exports = SubCategory;