const { Book, Author } = require("../model/model");

const authorController = {
    //Add author
    addAuthor: async (req, res) => {
        try {
            let newAuthor = new Author(req.body);
            let saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        }
        catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    //Get all author
    getAllAuthors: async (req, res) => {
        try {
            let authors = await Author.find().populate("books");
            res.status(200).json(authors);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    //Get An Author
    getAnAuthor: async (req, res) => {
        try{
            let author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

module.exports = authorController;