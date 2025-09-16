import mongoose from "mongoose";

const cart_sch = mongoose.Schema(
    {
        name: String,
        description: String,
        price: Number,
        category: String,
        stock: Number,
        imageUrl: String,
        Qty: Number,
    }
)

const cart_Item = mongoose.model("cart_Item", cart_sch)

export default cart_Item;