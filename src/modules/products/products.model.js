const mongoose = require('mongoose');


const productSchema = mongoose.Schema({

    productName: {
        type: String,
        requrired: true,
    },
    salesPrice: {
        type: String,
        requrired: true,
    },
    actualSalesPrice: {
        type: String,
        default: 0
    },
    purchasePrice: {
        type: String,
        requrired: true,
    },
    category: {
        type: String,
        requrired: true,
    },
    quantity: {
        type: String,
        required: true
    },
    barcode: {
        type: String,
        requried: true
    },
    material: {
        type: String,
        requried: true
    },
    frameType: {
        type: String,
        requried: true
    },
    size: {
        type: String,
        requried: true
    },
    shape: {
        type: String,
        requried: true
    },
    img: {
        type: String,
    },
    recorderName: {
        type: String,
        required: true
    },
    recorderEmail: {
        type: String,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    },
},
    {
        timestamps: true,
    }
)

const Products = mongoose.model("Product", productSchema);

module.exports = Products;