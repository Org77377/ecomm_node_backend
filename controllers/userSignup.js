import { User } from "../models/users.js";
import { nanoid } from "nanoid";
import { setUser } from "../service/auth.js";

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
    // const sessId = nanoid();
    // setUser(sessId, login);
    const token = setUser(login);
    // res.cookie("sid",sessId);
    res.cookie("sid",token);
    return res.redirect("/");
}