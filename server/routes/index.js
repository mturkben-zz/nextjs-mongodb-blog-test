const express = require('express');
const router = express.Router();


const adminRouter = require("./adminRouter")

router.use("/admin", adminRouter)


const {
	allBlog,
	getOneBlog
} = require("../controllers/getHomePage");

router.post("/allBlog",allBlog)
router.post("/getOneBlog/:_id",getOneBlog)

module.exports = router
