const express = require('express')
const OrderModel = require('../models/OrderModel')
const ProducModel = require('../models/ProductModel')

const OrderController = {

    //Create Order API - /api/v1/order
    createOrder : async (req,res,next) => {
        try{
            const cartItems = req.body
            const amount = Number(cartItems.reduce((acc,item) => (acc + item.product.price * item.qty),0)).toFixed(2)
            const status = "pending"

            const order = await OrderModel.create({cartItems, amount, status})

            //updating Product Stock
            cartItems.forEach(async (item)=>{
                const product = await ProducModel.findById(item.product._id)
                product.stock = product.stock - item.qty
                await product.save()
            })

            res.status(200).send({message:"getOrder working successfully", order})
        }
        catch(error){
            res.status(404).send({error})
        }
    }
}

module.exports = OrderController