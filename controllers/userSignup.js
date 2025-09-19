import { nanoid } from "nanoid";
import { User } from "../models/users.js";
import { setUser } from "../service/auth.js";

// create new user / user sign up 
export const userSign = async (req, res)=>{
    const {name, email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.render("login");
}

// handle user sign in
export const userLogin = async (req, res)=>{
    const {email, password} = req.body;
    const users = await User.findOne({email, password});
    if(!users){
        res.send("invalid login details");
    }
    // const ssid = nanoid(8);
    const token = setUser(users); //ssid
    res.cookie("uid", token, {httpOnly: true});
    return res.redirect("/");
}