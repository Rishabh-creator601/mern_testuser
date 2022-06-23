const express = require("express");
const connectToMongo =  require("./db");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/user");
const textRouter = require("./routes/text");


const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


connectToMongo();


app.get("/",(req,res)=>{
    res.send((" Hello world"))
})

app.use("/users",userRouter);
app.use("/texts",textRouter);


if(process.env.NODE_ENV=='production'){
    app.use(express.static("client/build"))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","build","index.html"));
    })

}

app.listen(port,()=>{
    console.log(`app listening on the Port ${port} `)
})