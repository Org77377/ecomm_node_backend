// importing all required packages and libraries 
const express = require("express")
const mongoose = require("mongoose")

const app = express();
const port = 8080;

// checking mongodb connection 
async function main(){
    await mongoose.connect("mongodb://localhost:27017/shopy");
}

main().then(()=>{
    console.log("bd connected");
}).catch((err)=>{
    console.log(err);
})

// testing the database and insertion
// const docSchema = mongoose.Schema(
//     {
//         name: String,
//         price: Number,
//         desc: String,
//         inStock: Boolean
//     }
// );

// const Product = mongoose.model("Product", docSchema);

// Product.insertOne(
//     { name: "iPhone 11 128GB", price: 24000, desc: "iPhone 11 128gb black color", inStock: true}
// ).then(()=>{
//     console.log("item added successfully");
// })
