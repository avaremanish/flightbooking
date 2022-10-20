import express from "express"
import dotevn from 'dotenv'
import mongoose from "mongoose"


dotevn.config();

const app = express()

const connect= async ()=>{

try {
    await mongoose.connect(process.env.MONGO);  
    console.log("Connected to mongoDB")
} catch( error){
    throw(error);
}
};

mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDB Disconnected")
})


mongoose.connection.on("connected", ()=> {
    console.log("mongoDB Connected")
})

app.get("/", (req, res)=>{
    res.send("Server is on!")
})



app.listen(8000, ()=>

    console.log("Connected to backend!")
    
    );