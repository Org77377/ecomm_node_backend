import express from "express";
import { addToCart, updateQty, deleteItem, getCart } from "../controllers/cart.js";
import { loggedInOnly } from "../middleware/auth.js";

const cartrouter = express.Router();

cartrouter
.route("/:name", )
.post(loggedInOnly,addToCart)
.put(updateQty)
.delete(deleteItem)

cartrouter.get("/",loggedInOnly, getCart);

export default cartrouter;