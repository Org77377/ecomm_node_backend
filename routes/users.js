import express from "express";
import { userSign, userLogin } from "../controllers/userSignup.js"

const user = express.Router();

user.post("/", userSign);
user.post("/login", userLogin);

export default user;