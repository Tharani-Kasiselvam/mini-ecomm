require('dotenv').config()

const NODE_ENV = process.env.NODE_ENV
const PORT = process.env.PORT
const MDB_URI = process.env.MDB_URI

module.exports = {
    NODE_ENV,
    PORT,
    MDB_URI,
}