const mongoose = require('mongoose');

const mySchema =new mongoose.Schema({
    Category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }],
    Name:{
        type:String,
    },
}, { timestamps: true });

const SubCategory = mongoose.model('SubCategory', mySchema);

module.exports = SubCategory;