const express = require ("express")
const router = express.Router()

// controladores
const {index,show} = require ("../controllers/marcasControllers.js")

router.get ("/",index)
router.get ("/:marca",show)

module.exports = router