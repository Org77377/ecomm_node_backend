import { User } from "../models/users.js";
import { nanoid } from "nanoid";

export const userSign = async (req, res)=>{
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("login");
}

export const userLogin = async (req, res)=>{
    const {email, password} = req.body;
    const login = await User.findOne({email, password});
    if(!login){
        res.status(400).send("invalid login details");
    }
    const sessId = nanoid(5);
    return res.redirect("/");
}