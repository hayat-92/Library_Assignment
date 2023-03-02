const express = require("express");
const mongoose = require("mongoose");
const books = require("./routes/books");

const app = express();

try {
  mongoose.connect("mongodb://127.0.0.1:27017/books", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to Database!");
} catch (error) {
  console.log(`Error: ${error.message}`);
  process.exit();
}

app.use(express.json());

app.use("/", books);

const PORT = process.env.PORT || 3000;
app.listen(3000, console.log(`Server Started on PORT ${PORT}`));
