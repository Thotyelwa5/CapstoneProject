const db = require("../config");

class order{
    
    getItems(req, res, userID) {
        const query = `
            SELECT o.orderID, b.bookTitle, b.bookUrl, o.quantity
            FROM Orders o
            JOIN Books b ON o.bookID = b.bookID
            WHERE o.userID = ?;
        `;
    
        db.query(query, [userID], (err, results) => {
            if (err) {
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ status: res.statusCode, results })
            }
        });
    }

    addItem(req, res, userID, bookID, quantity) {
        const query = `
            INSERT INTO Orders ( userID, bookID, quantity)
            VALUES (?, ?, ?);
        `;
    
        db.query(query, [userID, bookID, quantity], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ message: 'Book added to the cart!' });
            }
        });
    }

    updateItem(req, res, userID, orderID, quantity) {
        const query = `
            UPDATE Orders
            SET quantity = ?
            WHERE orderID = ? AND userID = ?;
        `;

        db.query(query, [quantity, orderID, userID], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ message: 'Cart item updated!' });
            }
        });
    }

    deleteItem(req, res, userID, orderID) {
        const query = `
            DELETE FROM Orders
            WHERE orderID = ? AND userID = ?;
        `;

        db.query(query, [orderID, userID], (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
            } else {
                res.json({ message: 'Cart item deleted successfully' });
            }
        });
    }
}

module.exports = order;