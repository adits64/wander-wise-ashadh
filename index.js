import express from "express";
import connectDB from "./config/database.js";


// import dotenv from 'dotenv';
// dotenv.config(); ----->>> it an old approachs that is not necessary to use 

const app = express();
const PORT = process.env.PORT;
connectDB();

const Greet= (req,res) =>  {
    res.send("hello world");
};

app.get("/",Greet);

app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}`)
}); 



