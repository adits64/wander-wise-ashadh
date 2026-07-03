import express from "express";
import connectDB from "./config/database.js";
import HANDLERS from './handlers/index.js'
import errorMiddleware from "./middlewares/error.js";

// import dotenv from 'dotenv';
// dotenv.config(); ----->>> it an old approachs that is not necessary to use 

const app = express();
const PORT = process.env.PORT;
connectDB();

// const Greet= (req,res) =>  {
//     res.send("hello world");
// };

// app.get("/",Greet);
app.use(express.json());
app.use('/', HANDLERS);
app.use(errorMiddleware);

app.listen(PORT, ()=> {
    console.log(`The server is running on ${PORT}`)
}); 



