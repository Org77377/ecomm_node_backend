import mongoose from "mongoose";

const cart_sch = mongoose.Schema(
    {
        name: {
          type: String,
          unique: true,
        },
        description: String,
        price: Number,
        category: String,
        stock: Number,
        imageUrl: String,
    }
)