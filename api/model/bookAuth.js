const db = require("../config");
class BookAuth {
    fetchAuthors(req, res) {
        const query = `
        SELECT id, authorName, authorSurname, bookID
        FROM BookAuthor;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }

    addAuthor(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO BookAuthor 
        SET ?;
        `;
        db.query(query, [data], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Author added successfully."
            });
        });
    }

    deleteAuthor(req, res) {
        const query = `
        DELETE FROM BookAuthor
        WHERE id = ?;
        `;
        db.query(query, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Author deleted successfully."
            });
        });
    }
    updateAuthor(req, res) {
        const data = req.body;
        const query = `
        UPDATE BookAuthor
        SET authorName = ?, authorSurname = ?, bookID = ?
        WHERE id = ?;
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Author updated successfully."
            });
        });
    }

    
}
module.exports = BookAuth;
