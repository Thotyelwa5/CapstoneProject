const db = require("../config");

class order {
    createOrder(userID, orderDate, totalAmount) {
        const query = `
        INSERT INTO Orders (userID, orderDate, totalAmount)
        SET ?;
        `;
        db.query(query, [userID, orderDate, totalAmount], (err) => {
            if (err) throw err;
            console.log("Order created successfully.");
        });
    }

    fetchOrders() {
        const query = `
        SELECT orderID, userID, orderDate, totalAmount
        FROM Orders;
        `;
        db.query(query, (err, result) => {
            if (err) throw err;
            console.log("Fetched orders:", result);
        });
    }

    updateOrder(orderID, newTotalAmount) {
        const query = `
        UPDATE Orders
        SET totalAmount = ?
        WHERE orderID = ?;
        `;
        db.query(query, [newTotalAmount, orderID], (err) => {
            if (err) throw err;
            console.log("Order updated successfully.");
        });
    }

    deleteOrder(orderID) {
        const query = `
        DELETE FROM Orders
        WHERE orderID = ?;
        `;
        db.query(query, [orderID], (err) => {
            if (err) throw err;
            console.log("Order deleted successfully.");
        });
    }
}

module.exports = order;