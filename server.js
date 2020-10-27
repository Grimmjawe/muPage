const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))

app.use(require("./routes/main"));
app.use(require("./routes/admin"));
app.use(require("./routes/404"));

app.listen(3000, ()=> {
    console.log("server is running on port 3000.");
});