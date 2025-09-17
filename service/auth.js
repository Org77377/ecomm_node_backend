// const sessIdToUserMap = new Map();
import jwt from "jsonwebtoken";
const scrt = "$server$"

function setUser(user){ //(removed sid)
    // sessIdToUserMap.set(sid, user)
    console.log(user);
    return jwt.sign({
        _id: user._id,
        email: user.email,
    }, scrt);
}

function getUser(token){ //(replaced sid with token)
    // return sessIdToUserMap.get(sid)
    if(!token) return null;
    jwt.verify(token, scrt)
}

export {getUser,setUser};