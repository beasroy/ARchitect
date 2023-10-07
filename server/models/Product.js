import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    title: String,
    description: String,
    locations: String,
    bhk: Number,
    price: String,
    priceranges: String,
    sqft: Number,
    thumbnail: String,
    images: [String],
    videos: [String],
});

const Products = mongoose.model("product", productsSchema);
export default Products;