const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const authorRouter = require("./routes/authorRoute");
const bookRouter = require("./routes/bookRoute");

dotenv.config();

app.use(bodyParser.json({limit:"100mb"}));
app.use(cors());
app.use(morgan("common"));

//connect database Mongo
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(console.log("Connected to MongoDb"))
.catch((err) => console.log(err));

mongoose.connection.on('error', function (err) {
    console.log(err);
   });

app.use("/api/v1/author", authorRouter);

app.use("/api/v1/book", bookRouter);

app.listen(6000,() => {
    console.log("Server is running...");
});