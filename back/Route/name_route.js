const router = require("express").Router()
const controller = require("../Controllers/name_controller")

router.post("/name", controller.createName)
router.get("/getName", controller.getAllName)

module.exports = router;