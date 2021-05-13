require('dotenv').config({path: ".env"})
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");


app.use(cors());
app.use(express.json());

const mainRouter = require("./routes");
app.use("/api", mainRouter);

mongoose.connect("mongodb://localhost/blog_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {

    app.listen(process.env.PORT, () => {
        console.log(`App Listening port: ${process.env.PORT}`);
    });

});
