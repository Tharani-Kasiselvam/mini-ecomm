const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : String,
    price : String,
    desription : String,
    ratings : String,
    offer : String,
    offer_price : String,
    images : [
        {
            image : String
        }
    ],
    category : String,
    seller : String,
    stock : String,
    numOfReviews : String,
    createdAt : Date
})

const ProductModel = mongoose.model('Product',productSchema)

module.exports = ProductModel