const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: { type: String, required: true },
    desc: {type:String,required:true,minLength:3}
    

},{
    timestamps:true
})



const User =  mongoose.model("text",UserSchema);


module.exports = User;

