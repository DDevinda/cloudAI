const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.static(__dirname + "/public"));

let router = express.Router();

router.get("/", function(req, res) {
    res.json({ message: "welcome to cloud AI server!" });
});

router.use(function(req, res, next) {
    console.log("got a request....");
    next();
});


const PORT = process.env.PORT || 8090;

if (module === require.main) {
    // Start the server
    const server = app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
}

module.exports = app;
