import express from "express";
import { getProducts } from "../controllers/products.js";
import { deleteItem } from "../controllers/cart.js";
import { loggedInOnly } from "../middleware/auth.js";

const staticrouter = express.Router();

staticrouter.get("/",getProducts);

staticrouter.get("/signup", (req, res)=>{
    res.render("signup");
});

staticrouter.get("/login", (req, res)=>{
    res.render("login");
});

staticrouter.get("/addtocart",(req,res)=>{
    res.render("addtocart");
})

staticrouter.get("/delete",(req,res)=>{
    res.render("delete");
})

staticrouter.post("/del", loggedInOnly,deleteItem);

export default staticrouter;