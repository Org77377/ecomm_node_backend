import { getUser } from "../service/auth.js";

export const restrictUser = async (req, res, next) => {
    const uid = req.cookies?.sid;
    if(!uid){
        res.redirect("/login")
    }
    const user = getUser(uid);
    if(!user){
        res.redirect("/login")
    }
    req.user = user;
    console.log(user);
    next();
}