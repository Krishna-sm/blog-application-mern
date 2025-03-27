const express = require("express")
const cors = require("cors")
// app create karna hain
const app = express()
app.use(express.json())
app.use(cors())
module.exports = app