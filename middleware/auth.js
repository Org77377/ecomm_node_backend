import { getUser } from "../service/auth.js";

export const loggedInOnly = async(req, res, next)=>{
    const userid = req.cookies?.uid;
    if(!userid) {
        return res.redirect('/login')
    };
    const user = await getUser(userid);
    req.user = user;
    next();
}

// export async function checkAuth(req, res, next){
//     const userid = await req.cookies?.sid;
//     const user = getUser(userid);
//     req.user = user;
//     next(); 
// }