const loginuserMap = new Map();
import jwt from "jsonwebtoken";
const secret = "@secret@";

export function setUser(user){ //id
    return jwt.sign(
        {
            _id: user._id,
            email: user.email,
        } 
            ,secret);
    // loginuserMap.set(id, user);
}

export async function getUser(token){ //id
    if(!token) return null;
    try{
     return jwt.verify(token, secret);
     }
     catch(err){
        return null;
     }
    // return loginuserMap.get(token);
}
