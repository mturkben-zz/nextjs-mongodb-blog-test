require('dotenv').config({path: "../../.env"});
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../../models/User");
const checkFields = require("../../utilities/checkFields");


const adminLogin = async (req, res) => {
    const {username, password} = req.body;

    const control = checkFields(username, password);
    if (!control) {
        res.status(403).json({status: "NO", notice: "Empty Inputs"})
    }

    const getUser = await User.findOne({username});
    if (getUser === null) {
        res.status(403).json({status: "NO", notice: "Not Found User"})
    } else {
        const passwordCompare = bcrypt.compareSync(password, getUser.password);
        if (passwordCompare) {
            res.status(200).json({status: "OK", token: getUser.token})
        } else {
            res.status(403).json({status: "NO", notice: "Wrong Way"})
        }
    }
}

const adminRegister = async (req, res) => {
    const {username, password} = req.body;

    const controlUsername = await User.findOne({username});

    if (controlUsername) {
        res.status(403).json({status: "NO", notice: "This Username Already Used"})
    } else {
        const generatePassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        const token = jwt.sign({username}, process.env.SECRET_KEY_FOR_ADMIN);

        const newUser = new User({
            username,
            password: generatePassword,
            token
        });

        await newUser
            .save()
            .then(() => {
                res.status(200).json({status: "OK"});
            })
            .catch((err) => res.status(403).json({status: "NO", notice: "Error, Try Again"}));
    }

}


module.exports = {
    adminLogin,
    adminRegister
}
