const router = require("express").Router();

const bookController = require("../controllers/bookController");

//Add book
router.post("/", bookController.addBook);

//Get All Books
router.get("/", bookController.getAllBooks);

//Get Books By Author
router.get("/author/:id", bookController.getBooksByAuthor);

//Update Book
router.put("/update/:id", bookController.updateBook);

//Delete Book
router.delete("/:id", bookController.deleleBook);

module.exports = router;