import express from "express";
import { getProducts } from "../controllers/products.js";

const staticrouter = express.Router();

staticrouter.get("/",getProducts);

staticrouter.get("/signup", (req, res)=>{
    res.render("signup");
});

staticrouter.get("/login", (req, res)=>{
    res.render("login");
});

staticrouter.get("/delete", (req, res)=>{
    res.render("delete");
})

staticrouter.get("/addtocart",(req,res)=>{
    res.render("addtocart");
})

export default staticrouter;