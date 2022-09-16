const Name = require("../model/name_model")

module.exports.createName = (req, res) =>{
    const name = new Name({
        firstName: req.body.firstName
    })
    

    name.save()
    .then((name)=> res.status(201).json(name))
    .catch(err => res.status(400).json({err}))
}


exports.getAllName = (req, res)=>{
    Name.find()
    .then((name)=> res.status(200).json(name))
    .catch(err => res.status(400).json({err}))
}