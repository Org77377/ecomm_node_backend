import mongoose from "mongoose";

const prod_sch = new mongoose.Schema(
    {
        name: {
          type: String,
          unique: true,
        },
        description: String,
        price: Number,
        category: String,
        stock: Number,
        imageUrl: String,
    }
);

const Product = mongoose.model("Product", prod_sch);

// uncomment below code to add some dummy documents to the collection
// *Note this will delete all your existing documents

// removing all old documents from the collection if exist
// Product.deleteMany({}).then(()=>{
//     console.log("data wiped");
// })

// inserting dummy product data 
// Product.insertMany(
// [
//   {
//     "name": "Laptop",
//     "description": "14-inch laptop with 8GB RAM, 256GB SSD.",
//     "price": 799.99,
//     "category": "Electronics",
//     "stock": 50,
//     "imageUrl": "https://example.com/images/laptop.jpg"
//   },
//   {
//     "name": "Smartphone",
//     "description": "5G smartphone with 128GB storage, 48MP camera.",
//     "price": 499.99,
//     "category": "Electronics",
//     "stock": 100,
//     "imageUrl": "https://example.com/images/smartphone.jpg"
//   },
//   {
//     "name": "Bluetooth Headphones",
//     "description": "Wireless Bluetooth headphones with noise cancellation.",
//     "price": 89.99,
//     "category": "Electronics",
//     "stock": 150,
//     "imageUrl": "https://example.com/images/headphones.jpg"
//   },
//   {
//     "name": "Gaming Mouse",
//     "description": "Ergonomic gaming mouse with RGB lighting.",
//     "price": 39.99,
//     "category": "Accessories",
//     "stock": 200,
//     "imageUrl": "https://example.com/images/mouse.jpg"
//   },
//   {
//     "name": "Smartwatch",
//     "description": "Fitness smartwatch with heart rate monitor and GPS.",
//     "price": 129.99,
//     "category": "Wearables",
//     "stock": 80,
//     "imageUrl": "https://example.com/images/smartwatch.jpg"
//   },
//   {
//     "name": "Wireless Charger",
//     "description": "Qi wireless charger for fast charging smartphones.",
//     "price": 19.99,
//     "category": "Accessories",
//     "stock": 300,
//     "imageUrl": "https://example.com/images/wireless-charger.jpg"
//   },
//   {
//     "name": "4K TV",
//     "description": "50-inch 4K Ultra HD smart television.",
//     "price": 399.99,
//     "category": "Electronics",
//     "stock": 40,
//     "imageUrl": "https://example.com/images/4k-tv.jpg"
//   },
//   {
//     "name": "Bluetooth Speaker",
//     "description": "Portable Bluetooth speaker with 12 hours of battery life.",
//     "price": 49.99,
//     "category": "Accessories",
//     "stock": 120,
//     "imageUrl": "https://example.com/images/bluetooth-speaker.jpg"
//   },
//   {
//     "name": "Wireless Earbuds",
//     "description": "True wireless earbuds with touch controls.",
//     "price": 59.99,
//     "category": "Electronics",
//     "stock": 180,
//     "imageUrl": "https://example.com/images/earbuds.jpg"
//   },
//   {
//     "name": "Camera Tripod",
//     "description": "Adjustable tripod for cameras and smartphones.",
//     "price": 25.99,
//     "category": "Accessories",
//     "stock": 110,
//     "imageUrl": "https://example.com/images/tripod.jpg"
//   },
//   {
//     "name": "Electric Toothbrush",
//     "description": "Rechargeable electric toothbrush with 2 cleaning modes.",
//     "price": 39.99,
//     "category": "Personal Care",
//     "stock": 70,
//     "imageUrl": "https://example.com/images/toothbrush.jpg"
//   },
//   {
//     "name": "Electric Kettle",
//     "description": "1.5L electric kettle with temperature control.",
//     "price": 34.99,
//     "category": "Home Appliances",
//     "stock": 90,
//     "imageUrl": "https://example.com/images/electric-kettle.jpg"
//   },
//   {
//     "name": "Blender",
//     "description": "Powerful blender with 3-speed settings for smoothies.",
//     "price": 69.99,
//     "category": "Home Appliances",
//     "stock": 60,
//     "imageUrl": "https://example.com/images/blender.jpg"
//   },
//   {
//     "name": "Coffee Maker",
//     "description": "Automatic drip coffee maker with a 12-cup capacity.",
//     "price": 49.99,
//     "category": "Home Appliances",
//     "stock": 130,
//     "imageUrl": "https://example.com/images/coffee-maker.jpg"
//   },
//   {
//     "name": "Desk Chair",
//     "description": "Ergonomic office chair with adjustable height and lumbar support.",
//     "price": 119.99,
//     "category": "Furniture",
//     "stock": 75,
//     "imageUrl": "https://example.com/images/desk-chair.jpg"
//   },
//   {
//     "name": "Standing Desk",
//     "description": "Adjustable standing desk with electric height control.",
//     "price": 299.99,
//     "category": "Furniture",
//     "stock": 40,
//     "imageUrl": "https://example.com/images/standing-desk.jpg"
//   },
//   {
//     "name": "Sofa",
//     "description": "3-seater sofa with plush cushions and durable fabric.",
//     "price": 499.99,
//     "category": "Furniture",
//     "stock": 30,
//     "imageUrl": "https://example.com/images/sofa.jpg"
//   },
//   {
//     "name": "Microwave",
//     "description": "Compact microwave oven with 700 watts of power.",
//     "price": 89.99,
//     "category": "Home Appliances",
//     "stock": 50,
//     "imageUrl": "https://example.com/images/microwave.jpg"
//   },
//   {
//     "name": "Air Fryer",
//     "description": "5.8QT air fryer for healthier cooking.",
//     "price": 89.99,
//     "category": "Home Appliances",
//     "stock": 45,
//     "imageUrl": "https://example.com/images/air-fryer.jpg"
//   }
// ]
// ).then(()=>{
//     console.log("data inserted successfully");
// })

export default Product;