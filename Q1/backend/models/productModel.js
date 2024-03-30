import mongoose, { mongo } from "mongoose";

const ProductSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
        required: true
    },

    discount: {
        type: Number,
        required: true
    },

    availability: {
        type: String,
        required: true
    }
})

const Product = mongoose.model("products", ProductSchema);

export default Product