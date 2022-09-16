const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://test:test123@challengewcs.8hgjyvf.mongodb.net/name")
.then(()=> console.log("Connection à mongoDB réussi"))
.catch(()=> console.log("Connection a mongoDB échoué"))