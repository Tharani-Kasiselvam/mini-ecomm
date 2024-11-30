const mongoose = require('mongoose')
const config = require('./utils/config')

const db = () => {
    console.log("Connecting to DB")

    mongoose.connect(config.MDB_URI)
    .then((con)=>{
        console.log(`MDB connected to host: ${con.connection.host}`)
    })
    .catch(error=>{
        console.log("Error in connecting to MDB")
    })
}

module.exports = db
