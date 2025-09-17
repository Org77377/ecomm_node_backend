import mongoose from "mongoose";

const user_sch = mongoose.Schema({
    name: {
        type : String,
        required: true,
    },
    email: {
        type : String,
        required: true,
        unique : true,
    },
    password: {
        type: String,
        required: true,
    },
},
    {
        timestamps : true,
    },
)

export const User = mongoose.model("user", user_sch);