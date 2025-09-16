import express from "express";
import { getProducts, getbyid, updateProduct, addProduct} from "../controllers/products.js";
const router = express.Router();

router.get("/",getProducts);

router
.route("/:id")
.get(getbyid)
.put(updateProduct)

router.post("/", addProduct);
export default router;