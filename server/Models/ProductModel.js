const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },  
    images: {
        type: [String], // Array of image URLs
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Category', // Reference to the category model
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
