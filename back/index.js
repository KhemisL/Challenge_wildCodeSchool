
const express = require("express")
const nameRoute = require("./Route/name_route")
const http = require("http");
const bodyParser = require("body-parser");
const cors = require('cors')
const PORT = 3000
require("./db/db") 
const app = express()
app.use(express.json())


app.use(cors())
app.use(bodyParser.json())
app.use("/api", nameRoute)
app.use("/api", nameRoute)


app.listen(PORT, ()=>{
    console.log(`Le serveur est lancé sur le port ${PORT}`);
})