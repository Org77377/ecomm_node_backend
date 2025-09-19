import Product from "../models/products.js";

// get all the products 
export const getProducts = async (req, res)=>{
    const data = await Product.find({});
    res.render("home", {products : data})
}

// find product using a id 
export const getbyid = async (req, res)=> {
    const {id} = req.params;
    const find = await Product.findById(id);
    res.json(find);
}

// update product using the product name
export const updateProduct = async(req,res) => {
    const id = req.params.id;
    const {name, description, price, category, stock} = req.body;
    const updated = Product.findByIdAndUpdate(id, 
        name,
        description,
        price,
        category,
        stock,
    ).then(()=>{
        res.send("data updated!");
        res.json(updated)
    }).catch((err)=>{
        res.send(err);
    })
}

// add new product to the product list 
export const addProduct = async(req,res)=>{
    const {name, description, price, category, stock, imageUrl} = req.body;
    const updated = await Product.insertOne({   
        name,
        description,
        price,
        category,
        stock,
        imageUrl,
    }).then(()=>{
        res.send("Product Addedd!");
        res.json(updated)
        console.log(updated)
    }).catch((err)=>{
        res.status(404).send("Error: Duplicate Entry");
    })
}