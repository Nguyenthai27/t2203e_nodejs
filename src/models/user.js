let mongoose = require("mongoose");
let userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:5,
        maxLength:255
    },
    password:{
        type:String,
        require:true,
        minLength:5,
        maxLength:255
    },
    permission:Array

})
module.exports = mongoose.model("User",userSchema);
