// importing all required packages and libraries 
import express from "express";
import mongoose from "mongoose";
import router from "./routes/product.js";
import cartrouter from "./routes/cart.js";
import path from "path";
import staticrouter from "./routes/staticRoutes.js";
import user from "./routes/users.js";

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// checking mongodb connection 
async function main(){
    await mongoose.connect("mongodb://localhost:27017/shopy");
}

main().then(()=>{
    console.log("bd connected");
}).catch((err)=>{
    console.log(err);
})

app.listen(port, ()=>{
    console.log("server is listening...");
})

app.use("/product", router);
app.use("/cart", cartrouter);
app.use("/", staticrouter);
app.use("/users", user)
