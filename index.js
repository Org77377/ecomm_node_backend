// importing all required packages and libraries 
import express from "express";
import mongoose from "mongoose";
import {getProducts} from "./controllers/products.js";
import { getbyid } from "./controllers/products.js";

const app = express();
const port = 3000;
const router = express.Router();

app.use(express.json())
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

router.get("/", getProducts);
router.get("/:id", getbyid);

app.use("/", router)