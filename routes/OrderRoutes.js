const express = require('express')
const router = express.Router()

const OrderController = require('../controllers/OrderController')

router.post('/order',OrderController.createOrder)

module.exports = router