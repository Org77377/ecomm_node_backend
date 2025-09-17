import express from "express";
import { getProducts } from "../controllers/products.js";


const staticrouter = express.Router();

staticrouter.get("/", (req, res)=>{
    res.render("login");
})

staticrouter.get("/signup", (req, res)=>{
    res.render("signup");
});

staticrouter.get("/login", (req, res)=>{
    res.render("login");
});

export default staticrouter;