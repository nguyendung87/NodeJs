const router = require("express").Router();

const authorController = require("../controllers/authorController");

//Add author
router.post("/", authorController.addAuthor);

//Get All Authors
router.get("/", authorController.getAllAuthors);

//Get An Author
router.get("/:id", authorController.getAnAuthor);

module.exports = router;