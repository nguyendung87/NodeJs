const mongoose = require("mongoose");

const authorSchemal = new mongoose.Schema({
    name: String,
    year: Number,
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
});

const bookSchemal = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publishedDate: {
        type: String
    },
    genres: {
        type: [String]
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
});

let Book = mongoose.model("Book", bookSchemal);
let Author = mongoose.model("Author", authorSchemal);

module.exports = { Book, Author };
