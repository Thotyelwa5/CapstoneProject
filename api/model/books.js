const db = require("../config");
class Books {
    fetchBooks(req, res) {
        const query = `
        SELECT bookID, bookTitle,amount,category, bookUrl
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
        SELECT bookID, bookTitle,amount, category, bookUrl
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
        INSERT INTO Books
        SET ?;
        `;
        
        db.query(query, [data], (err) => {
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
        SET ?
        WHERE bookID = ?;
        `;
        // const values = [data.bookTitle, data.category, data.bookUrl, req.params.id];

        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Book updated successfully."
            });
        });
    }

}
module.exports = Books;
