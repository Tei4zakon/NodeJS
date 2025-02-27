const {read, write} = require("./read-write");

const getBookData = async () => {
    const fileContent = await read ("bookData.json");
    return fileContent;
    
};

const addBook = async (bookData) => {
    let books = await read ("bookData.json");
    books.push(bookData);
    await write ("bookData.json", books);
};

const deleteBook = async (bookIndex) => {
    let books = await read ("bookData.json");
    books = books.filter((_, index) => index !== bookIndex);
    await write ("bookData.json", books);
};

const updateBook = async (bookIndex, bookData) => {
    let books = await read ("bookData.json");
    books = books.map((book, index) => {
        if (bookIndex === index) {
            return {
            ...book,
            ...bookData
        };
        };
    });
    await write ("bookData.json", books);
};

module.exports = {
    getBookData,
    updateBook,
    deleteBook,
    addBook,
}