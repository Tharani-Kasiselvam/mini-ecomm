const express = require('express')
const cors = require('cors')
const app = express()

const mongoose = require('mongoose')
const morgan = require('morgan')

const config = require('./utils/config')
const ProductRoutes = require('./routes/ProductRoutes')
const OrderRoutes = require('./routes/OrderRoutes')
const connectToDb = require('./db')

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/',(req,res,next)=>{
    res.send("Welcome to Mini eCommerce")
})

connectToDb()

app.use('/api/v1',ProductRoutes)
app.use('/api/v1',OrderRoutes)



app.listen(config.PORT,()=>{
    console.log(`Serever is running on ${config.NODE_ENV} environment - http://localhost:3031`)
})




