const express = require('express')
const ProductModel = require('../models/ProductModel')

const ProductController = {
    //Get Products API - /api/v1/products
    getProducts : async (req,res,next) => {
        try{

        let query = req.query.keyword ? { name : {
            $regex : req.query.keyword,
            $options : "i"
        }} : {}
        const products = await ProductModel.find(query)
        
        res.status(200).send({message:"getProducts working successfully",products})
        }
        catch(error){
            // res.send({message:"No Products available"})
        }
    },

    //Get Single Product API - /api/v1/product/:id
    getProductById : async (req,res,next) => {
        try{
        console.log(req.params.id, "ID")
        
        const product = await ProductModel.findById(req.params.id)
        res.status(200).send({message:"ProductsById working successfully", product})
        }
        catch(error){
            res.status(404).send({error:"Product ID is not valid"})
        }
    },
}

module.exports = ProductController