const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/authentication')
const routes = express.Router()
//Import all model's objects
const {users, books, orders, bookAuth} = require('../model')
//User's router
routes.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})
routes.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})
routes.post('/register',bodyParser.json(), 
(req, res)=>{
    users.register(req, res)
})
routes.put('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.patch('/user/:id', bodyParser.json(),
 (req, res)=>{
    users.updateUser(req,res)
})
routes.delete('/user/:id', (req, res)=>{
    users.deleteUser(req, res)
})
routes.post('/login',
bodyParser.json(), (req, res)=>{
    users.login(req, res)
})

// Book's router
routes.get('/books', (req, res) => {
    books.fetchBooks(req, res);
});

routes.get('/book/:id', (req, res) => {
    books.fetchBook(req, res);
});

routes.post('/books', bodyParser.json(), (req, res) => {
    books.addBook(req, res);
});

routes.put('/book/:id', bodyParser.json(), (req, res) => {
    books.updateBook(req, res);
});

routes.delete('/books/:id', (req, res) => {
    books.deleteBook(req, res);
});
routes.patch('/books/:id', bodyParser.json(),
 (req, res)=>{
    books.updateBook(req,res)
})
//=====orders

routes.get('/orders/:userID', (req, res) => {
    const userID = req.params.userID;
    if (!userID) {
        return res.status(400).json({ message: 'userID is required' });
    }
    orders.getItems(req, res, userID);
});

// Add item to cart
routes.post('/add-orders/:userID', bodyParser.json(), (req, res) => {
    const userID = req.params.userID;
    const { bookID, quantity } = req.body;
    orders.addItem(req, res, userID, bookID, quantity);
});

// Update item in cart
routes.put('/orders/:userID/:orderID', bodyParser.json(), (req, res) => {
    const userID = req.params.userID;
    const orderID = req.params.orderID;
    const { quantity } = req.body;
    orders.updateItem(req, res, userID, orderID, quantity);
});

// Delete item from cart
routes.delete('/orders/:userID/:orderID', (req, res) => {
    const userID = req.params.userID;
    const orderID = req.params.orderID;
    orders.deleteItem(req, res, userID, orderID);
});

// Book Author's router
routes.get('/authors', (req, res) => {
    bookAuth.fetchAuthors(req, res);
});

routes.post('/authors', bodyParser.json(), (req, res) => {
    bookAuth.addAuthor(req, res);
});

routes.put('/author/:id', bodyParser.json(), (req, res) => {
    bookAuth.updateAuthor(req, res);
});
routes.patch('/author/:id', bodyParser.json(), (req, res) => {
    bookAuth.updateAuthor(req, res);
});
routes.delete('/author/:id', (req, res) => {
    bookAuth.deleteAuthor(req, res);
});


module.exports = {
    express,
    routes,
    verifyAToken
}
 