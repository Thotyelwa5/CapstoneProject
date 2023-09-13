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
                // console.error(err);
                res.status(500).json({ message: 'Internal Server Error' });
                // res.json({status: res.statusCode, results})
            } else {
                res.json({ status: res.statusCode, results })
            }
        });
    }

    addItem(req, res, userID, bookID, quantity) {
        // console.log("cart.addItem is called. UserID:", userID, "Product ID:", productID, "Quantity:", quantity);
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

// class order {
//     addOrder(req, res) {
//         const data = req.body;
//         const query = `
//         INSERT INTO Orders
//         SET ?;
//         `;
//         db.query(query, [data], (err) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 msg: "Order item added to cart!"
//             })
//         });
//     }

//     fetchOrders(req, res) {
//         const query = `
//         SELECT orderID, quantity, userID, bookID, oderDATE,totalAmount
//         FROM Orders;
//         `;
//         db.query(query, (err, results) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 results
//             })  
//         });
//     }

//     fetchOrder(req, res) {
//         const query = `
//         SELECT orderID, quantity, userID, bookID, oderDATE,totalAmount
//         FROM Orders
//         WHERE orderID = '${req.params.id}';;
//         `;
//         db.query(query, (err, result) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 result
//             })  
//         });
//     }

//     updateOrder(req, res) {
//         const query = `
//         UPDATE Orders
//         SET ?
//         WHERE orderID = ?;
//         `;
//         db.query(query, [req.body, req.params.id], (err) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 msg: "Order updated successfully."
//             });
//         });
//     }

//     deleteOrder(req, res) {
//         const query = `
//         DELETE FROM Orders
//         WHERE orderID = ?;
//         `;
//         db.query(query, [req.params.id], (err) => {
//             if (err) throw err;
//             res.json({
//                 status: res.statusCode,
//                 msg: "Order deleted successfully."
//             });
//         });
//     }
// }

module.exports = order;