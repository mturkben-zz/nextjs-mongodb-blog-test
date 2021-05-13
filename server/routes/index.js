const express = require('express');
const router = express.Router();


const adminRouter = require("./adminRouter")

const {
    getHomePage
} = require("../controllers/getHomePage")

router.use("/admin", adminRouter)
router.use("/home-page", getHomePage)

module.exports = router
