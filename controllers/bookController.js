const { Book, Author } = require("../model/model");

const bookController = {
    //Add Book
    addBook: async (req, res) => {
        try {
            let newBook = new Book(req.body);
            let saveBook = await newBook.save();
            if (req.body.author) {
                let author = Author.findById(req.body.author);
                await author.updateOne({ $push: { books: saveBook._id } });
            }

            res.status(200).json(saveBook);
        } catch (err) {
            res.status(500).json(err);
        };
    },
    //Get All Books
    getAllBooks: async (req, res) => {
        try {
            let books = await Book.find().populate("author");
            res.status(200).json(books);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Get Books By Author
    getBooksByAuthor: async (req, res) => {
        try {
            let author = await Author.findById(req.params.id);
            if (author) {
                let books = await Book.find({ "author": author });
                res.status(200).json(books);
            }
            else {
                res.status(404).json(req.params.id);
            }
        } catch (err) {
            req.status(500).json(err);
        }
    },
    //Update Book
    updateBook: async (req, res) => {
        try {
            let book = await Book.findById(req.params.id);
            if (book) {
                await book.updateOne({ $set: req.body });
                res.status(200).json("Updated successfully");
            }
            else {
                res.status(404).json(req.params.id);
            }
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //Delete Book
    deleleBook: async (req, res) => {
        try {
            await Author.updateMany(
                { books: req.params.id },
                { $pull: { books: req.params.id } }
            );
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = bookController;