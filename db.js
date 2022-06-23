const mongoose = require("mongoose");
const dotenv = require("dotenv");


const uri_net = "mongodb+srv://hack:QF1QodQheEfh4QHF@cluster0.7hjgs.mongodb.net/?retryWrites=true&w=majority";

dotenv.config({path:"./config.env"})



const connectToMongo = () =>{

    mongoose.connect(uri_net,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connected To Mongo Db Sucessfully")
    })
}



module.exports = connectToMongo;