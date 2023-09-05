const db = require("../config");

class order {
    createOrder() {
        const query = `
        INSERT INTO Orders (orderID, quantity, userID,bookID, orderDate, totalAmount)
        SET ?;
        `;
        db.query(query, [data.orderID, data.quantity, data.userID, data.bookID, data.totalAmount], (err) => {
            if (err) throw err;
            console.log("Order created successfully.");
        });
    }

    fetchOrders() {
        const query = `
        SELECT orderID, quantity, userID, bookID, orderDate,totalAmount
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