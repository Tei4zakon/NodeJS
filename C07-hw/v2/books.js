const express = require('express');

const {
    getBookData,
    updateBook,
    addBook,
    deleteBook,
} = require('./handlers/bookDataFunctionalities');

const app = express()

app.use(express.json());

app.get('/bookData', getBookData);
app.post('/addBook', addBook);
app.put('/book/:id', updateBook);
app.delete('/book/:id', deleteBook);

app.listen(6060, () => console.log("Server is listening on port 6060..."));