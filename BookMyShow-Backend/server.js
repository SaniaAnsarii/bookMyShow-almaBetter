const express = require("express");
const app = express();
const { connection } = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const bookingRoute = require("./Routes/movieRoute")

app.use( bodyParser.urlencoded({ extended: false }) );
app.use( bodyParser.json() );
app.use( cors() );

connection();

app.get("/", async (req, res) => {
    res.send("hi i am home page")
})
app.use("/api", bookingRoute);

const port = process.env.PORT || 8081;
app.listen( port, () => console.log(`App listening on port ${port}!`) );

module.exports = app;
