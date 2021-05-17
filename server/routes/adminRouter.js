const express = require('express');
const router = express.Router();

const {
    adminLogin,
    adminRegister
} = require("../controllers/admin/account")

const {
    addBlog,
} = require("../controllers/admin/blogPost")

router.post("/login", adminLogin)
router.post("/register", adminRegister)

router.post("/addBlog",addBlog)

module.exports = router
