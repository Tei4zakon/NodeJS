const {getBookData,
    addBook, 
    updateBook,
    deleteBook, 
} = require ("./bookDataFunctionalities");

async function main() {
    const books = await getBookData();
    console.log('books', books);

    //await addBook({"book": "Meditations ", "author": "Marcus Aurelius", "publicationYear": 2003, "position":6});
    //await deleteBook(3);
    //await updateBook(4, {position : 4});
};



main ()