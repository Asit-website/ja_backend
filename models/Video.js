const mongoose = require('mongoose');

const mySchema =new mongoose.Schema({
    category:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    }],

    subCategory:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SubCategory",
    }],

    Videourl:{
        type:String
    },
}, { timestamps: true });

const Video = mongoose.model('Video', mySchema);

module.exports = Video;