const {read, write} = require("../read-write");

const getBookData = async (req, res) => {
    const books = await read ("bookData.json");
    return res.send(books);
    
};

const addBook = async (req, res) => {
    const books = await read ("bookData.json");
    books.push(req.body);
    await write ("bookData.json", books);
    return res.send("Book added successfully!");
};

const deleteBook = async (req, res) => {
    let books = await read ("bookData.json");
    books = books.filter((_, index) => index !== Number(req.params.id));
    await write ("bookData.json", books);
    return res.send(`Book with index ${req.params.id} was deleted successfully!`)
};

const updateBook = async (req, res) => {
    let books = await read ("bookData.json");
    books = books.map((book, index) => {
        if (Number(req.params.id) === index) {
            return {
            ...book,
            ...req.body
        };
        }; return book
    });
    await write ("bookData.json", books);
    return res.send(`${req.params.id} successfully added!`);
};

module.exports = {
    getBookData,
    updateBook,
    deleteBook,
    addBook,
}