const {Book, Author} = require("../model/model");

const bookController = {
   addBook: async (req, res) => {
       res.status(200).json(req.body);
   },
   getAllBooks: async (req,res) => {
       res.status(200).json(req.body);
   },
};

module.exports = bookController;