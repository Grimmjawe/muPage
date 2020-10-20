const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const erPage = require("./routes/404");
const adRoute = require("./routes/admin");

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))


app.use(adRoute);
app.use(erPage);

app.listen(3000, ()=> {
    console.log("server is running on port 3000.");
});