import Product from "../models/products.js";

export const getProducts = async (req, res)=>{
    const data = await Product.find({});
    return res.json(data);
}

// find product using a id 
export const getbyid = async (req, res)=> {
    const {id} = req.params;
    const find = await Product.findById(id);
    res.json(find);
}
