const {Router} = require("express")
const { location, create, findDistance } = require("../controllers/locations.controller")
const router = Router()


router.get("/location", location)
router.post("/save-location", create)
router.get("/total", findDistance)



module.exports = router