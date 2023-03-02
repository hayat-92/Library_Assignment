const express = require("express");
const router = express.Router();
const { Book } = require("../Model/Book");
router.post("/books", async (req, res) => {
  const { title, author, description } = req.body;
  console.log(title, author, description);
  const book = await Book.create({ title, author, description });
  res.status(201).send(book);
});

router.get("/books", async (req, res) => {
  const books = await Book.find();
  res.send(books);
});

router.put("/books/:id", async (req, res) => {
  const { title, author, description } = req.body;
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    { title, author, description },
    { new: true }
  );
  res.send(book);
});

router.delete("/books/:id", async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.send("Deleted Successfully!");
});

module.exports = router;
