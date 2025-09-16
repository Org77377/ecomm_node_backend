// importing all required packages and libraries 
import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.js";
import cartrouter from "./routes/cart.js";

const app = express();
const port = 3000;

app.use(express.json());
// checking mongodb connection 
async function main(){
    await mongoose.connect("mongodb://localhost:27017/shopy");
}

main().then(()=>{
    console.log("bd connected");
}).catch((err)=>{
    console.log(err);
})

app.listen(port, ()=>{
    console.log("server is listening...");
})

app.use("/product", router);
app.use("/cart", cartrouter);
