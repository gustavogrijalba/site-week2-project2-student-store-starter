// YOUR CODE HERE

//importing the dependencies for server
const express = require('express')
const cors = require('cors')
const productRoutes = require("./routes/productRoutes")

app = express()

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).json({ping:"pong"})
})

app.use("/store", productRoutes)

module.exports = app
