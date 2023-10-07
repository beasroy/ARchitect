import Products from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Products.find({}).exec();
        return res.status(200).json({products});
    } catch (err) {
        return res.status(400).json({msg: err.message});
    }
}

export const addProducts = async (req, res) => {
    try{
        const data = await req.body;
        const product = new Products(data);
        const newProduct = await product.save()
    
    
        return res.status(201).json({newProduct});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}

export const getFilteredProducts = async (req, res) => {
    try{
        const data = await req.body;
        
        const products = await Products.find(data).exec();

        return res.status(200).json({products});


    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}

export const getProductById = async (req, res) => {
    try{
        console.log(req.params);
        const {_id} = req.params;

        const product = await Products.findById(_id).exec();
        return res.status(200).json({product});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}
// localhost:8000/products/filter 
// method:POST
// body: {
//     "locations": "",
//     "sqft": "",
// }