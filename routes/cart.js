import express from "express";
import { addToCart, updateQty, deleteItem, getCart } from "../controllers/cart.js";
import { get } from "mongoose";

const cartrouter = express.Router();

cartrouter
.route("/:name")
.post(addToCart)
.put(updateQty)
.delete(deleteItem)

cartrouter.get("/",getCart);

export default cartrouter;