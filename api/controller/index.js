const express = require('express')
const bodyParser = require('body-parser')
const {verifyAToken} = require('../middleware/authentication')
const routes = express.Router()
//Import all model's objects
const {users, books} = require('../model')
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
    users.delete(req, res)
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

// Order's router
routes.get('/orders', (req, res) => {
    orders.fetchOrders(req, res); 
});

routes.get('/orders/:id', (req, res) => {
    orders.fetchOrder(req, res); 
});

routes.post('/add', bodyParser.json(), (req, res) => {
    orders.addOrder(req, res); 
});

routes.put('/orders/:id', bodyParser.json(), (req, res) => {
    orders.updateOrder(req, res); 
});

routes.patch('/orders/:id', bodyParser.json(), (req, res) => {
    orders.updateOrder(req, res); 
});

routes.delete('/orders/:id', (req, res) => {
    orders.deleteOrder(req, res); 
});

// Book Author's router
routes.get('/authors', (req, res) => {
    bookAuth.fetchAuthors(req, res);
});

routes.post('/authors', bodyParser.json(), (req, res) => {
    bookAuth.addAuthor(req, res);
});

routes.put('/authors/:id', bodyParser.json(), (req, res) => {
    bookAuth.updateAuthor(req, res);
});
routes.patch('/authors/:id', bodyParser.json(), (req, res) => {
    bookAuth.updateAuthor(req, res);
});
routes.delete('/authors/:id', (req, res) => {
    bookAuth.deleteAuthor(req, res);
});


module.exports = {
    express,
    routes,
    verifyAToken
}
 