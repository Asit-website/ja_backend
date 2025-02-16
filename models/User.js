const mongoose = require("mongoose")

const mySchema =new mongoose.Schema({
    googleId: String ,
    name: String,
    email: String,
    phone: String,
    password: String,
    categoryies:String,
    confirmPassword: String,
    role: String,
    website: {
        type: String,
        default: ""
    },
    budget: {
        type: String,
        default: ""
    },
    location: {
        type: String,
        default: ""
    },
   city:{
    type:String,
    default:""
   },
    aboutCompany:{
        type:String,
        default: ""
    },
    twiter:{
        type:String,
        default: "" 
    },
    facebook:{
        type:String,
        default: ""  
    },
    linkdin:{
        type:String,
        default: ""  
    },
    insta:{
        type:String,
        default: ""  
    },
    img: {
        type: Object,
        default: {}
    },
    
}, { timestamps: true });

const User = mongoose.model('User', mySchema);

module.exports = User;
