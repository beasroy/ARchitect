import express from "express";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import path from "path";
import priceRoutes from "./routes/price.js";
import productRoutes from "./routes/products.js";
import filterRoutes from "./routes/filters.js";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import cors from "cors";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config();

const app = express();

app.use(cors());

app.use(bodyParser.json({limit:"30mb"}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json({limit:"30mb"}));
app.use(express.static(path.join(__dirname, "/public/assets")));

app.use(express.urlencoded({limit:"30mb", extended:true}));

app.use("/price", priceRoutes);
app.use("/products", productRoutes);
app.use("/filter", filterRoutes);
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`));
}).catch((err) => {
    console.log(err);
});

// app.listen(process.env.PORT, () => console.log(`Server running at ${process.env.PORT}`));

