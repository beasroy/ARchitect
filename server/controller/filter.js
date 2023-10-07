import Filter from "../models/Filter.js";
let l, s, p, b;
export const filter = async (req, res) => {
    try{
        const data = await req.body;
        const fields = new Filter(data);
        const filters = await fields.save();
        return res.status(201).json({filters});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}
export const getFields = async (req, res) => {
    try{
        const fields = await Filter.find({}).exec();
        const {locations, sqft, priceranges, bhk} = fields[0];
        // return res.status(200).json(fields);
        l = locations;
        s = sqft;
        b=bhk;
        p = priceranges;
        // res.status(200).json({locations, sqft, priceranges, bhk});
    } catch(err) {
        // return res.status(400).json({msg: "unsucessfull"});
        console.log(err.message);
    }
}
export const getLocations = async (req, res) => {
    try{
        getFields();
        return res.status(201).json({locations: l});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}

export const getPriceRanges = async (req, res) => {
    try{
        getFields();
        return res.status(201).json({priceranges: p});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}

export const getBhk = async (req, res) => {
    try{
        getFields();
        return res.status(201).json({bhk: b});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}

export const getSqft = async (req, res) => {
    try{
        getFields();
        return res.status(201).json({sqft: s});
    } catch(err){
        return res.status(400).json({msg: err.message});
    }
}