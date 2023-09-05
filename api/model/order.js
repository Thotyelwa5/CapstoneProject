const db = require("../config");
class order {
    addOrder(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO Orders
        SET ?;
        `;
        db.query(query, [data], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Order item added to cart!"
            })
        });
    }

    fetchOrders(req, res) {
        const query = `
        SELECT orderID, quantity, userID, bookID, oderDATE,totalAmount
        FROM Orders;
        `;
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            })  
        });
    }

    fetchOrder(req, res) {
        const query = `
        SELECT orderID, quantity, userID, bookID, oderDATE,totalAmount
        FROM Orders
        WHERE orderID = '${req.params.id}';;
        `;
        db.query(query, (err, result) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                result
            })  
        });
    }

    updateOrder(req, res) {
        const query = `
        UPDATE Orders
        SET ?
        WHERE orderID = ?;
        `;
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Order updated successfully."
            });
        });
    }

    deleteOrder(req, res) {
        const query = `
        DELETE FROM Orders
        WHERE orderID = ?;
        `;
        db.query(query, [req.params.id], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Order deleted successfully."
            });
        });
    }
}

module.exports = order;