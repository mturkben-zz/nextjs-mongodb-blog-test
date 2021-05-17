const express = require('express');
const router = express.Router();


const adminRouter = require("./adminRouter")

router.use("/admin", adminRouter)

module.exports = router
