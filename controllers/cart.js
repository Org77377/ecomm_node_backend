import cart_Item from "../models/cartItem.js";
import Product from "../models/products.js";

export const getCart = async (req, res) => {
  if(!req.user){
    return res.redirect('/login');
  }
  const allCart = await cart_Item.find({ addedby: req.user._id });
  return res.render("cart", { cart: allCart,});
};

export const addToCart = async (req, res) => {
  const name = req.body.cartItem;
  if(!req.user){
    return res.redirect('/login');
  }
  const id = req.user._id; 
  const product = await Product.findOne({ name, });
  if (!product) {
    return res.status(404).send("Product not found");
  }
  let checkExist = await cart_Item.findOne({ name: product.name, addedby: id }); //name: product.name

  if (checkExist) {
    checkExist.Qty += 1;
    await checkExist.save();
    res.send("Prodduct quantity updated");
  } else {
    const cart = new cart_Item({
      productId: product._Id,
      name: product.name,
      price: product.price,
      Qty: 1,
      addedby: id,
    });

    await cart.save();
    res.status(201).send("Product added to cart");
  }
};

export const updateQty = async (req, res) => {
  const name = req.params.name;
  const checkExist = await cart_Item.findOne({ name: name });
  if (!checkExist) {
    res.status(404).send("Item is not in the cart");
  }
  checkExist.Qty += 1;
  const Qty = checkExist.Qty;
  console.log(Qty);
  res.status(201).send(`Quantity updated current quantity: ${Qty}`);
  await checkExist.save();
};

export const deleteItem = async (req, res) => {
  const {name} = req.params;
  const checkExist = await cart_Item.findOne({ name: name });
  if (!checkExist) {
    res.status(404).send(`${name} is not present in the cart`);
  }
  await cart_Item.deleteOne({ name: name });
  res.send("Item removed from cart");
};