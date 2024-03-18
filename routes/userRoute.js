const express = require("express");
const router = express.Router();
 
const user = require("../models/userModel");
const { createUser ,home} = require("../controllers/userControllers");

//  /api/user/
router.get("/",home)

router.post("/create",createUser)

module.exports = router;
