import mongoose from "mongoose";
const locationSchema = mongoose.Schema({
    value: String,
    label: String,
    checeked: Boolean,
});
const pricerangesSchema = mongoose.Schema({
    value: String,
    label: String,
    checeked: Boolean,
});
const bhkSchema = mongoose.Schema({
    value: String,
    label: String,
    checeked: Boolean,
});
const sqftSchema = mongoose.Schema({
    value: String,
    label: String,
    checeked: Boolean,
});

const filterSchema = mongoose.Schema({
    locations: [locationSchema],
    priceranges: [pricerangesSchema],
    bhk: [bhkSchema],
    sqft: [sqftSchema],
});

const Filter = mongoose.model("filter", filterSchema);
export default Filter;