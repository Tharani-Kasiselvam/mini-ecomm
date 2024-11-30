const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/products',ProductController.getProducts)
router.get('/product/:id',ProductController.getProductById)

module.exports = router