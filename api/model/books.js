const db = require("../config");
class Books {
    fetchBooks(req, res) {
        const query = `
        SELECT bookID, bookTitle, category, bookUrl
        FROM Books;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchBook(req, res) {
        const query = `
        SELECT bookID, bookTitle, category, bookUrl
        FROM Books
        WHERE bookID = '${req.params.id}';
        `;
        db.query(query, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            });
        });
    }
    addBook(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO Books (bookID, bookTitle, category, bookUrl)
        SET ?;
        `;
        const values = [data.bookID, data.bookTitle, data.category, data.bookUrl];
        
        db.query(query, values, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Book added successfully."
            });
        });
    }
    deleteBook(req, res) {
        const query = `
        DELETE FROM Books
        WHERE bookID = ?;
        `;
        db.query(query, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Book deleted successfully."
            });
        });
    }
    updateBook(req, res) {
        const data = req.body;
        const query = `
        UPDATE Books
        SET bookTitle = ?, category = ?, bookUrl = ?
        WHERE bookID = ?;
        `;
        const values = [data.bookTitle, data.category, data.bookUrl, req.params.id];

        db.query(query, values, (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Book updated successfully."
            });
        });
    }

}
module.exports = Books;
