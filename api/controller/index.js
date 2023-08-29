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
routes.get('/users/:id', (req, res)=>{
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
//Book's router
routes.get('/books', (req, res)=>{
    books.fetchbooks(req, res)
})
routes.get('/books/:id', (req, res)=>{
    books.fetchbooks(req, res)
})
routes.post('/register',bodyParser.json(),
(req, res)=>{
    books.register(req, res)
})
routes.put('/books/:id', bodyParser.json(),
 (req, res)=>{
    books.updatebooks(req,res)
})
routes.patch('/books/:id', bodyParser.json(),
 (req, res)=>{
    books.updatebooks(req,res)
})
routes.delete('/books/:id', (req, res)=>{
    books.delete(req, res)
})
//ODER ROUTES
routes.get('/oders', (req, res)=>{
    orders.fetchorders(req, res)
})
routes.get('/orders/:id', (req, res)=>{
    orders.fetchorders(req, res)
})
routes.post('/add',bodyParser.json(),
(req, res)=>{
    orders.add(req, res)
})
routes.put('/orders/:id', bodyParser.json(),
 (req, res)=>{
    orders.updateorders(req,res)
})
routes.patch('/orders/:id', bodyParser.json(),
 (req, res)=>{
    orders.updateorders(req,res)
})
routes.delete('/orders/:id', (req, res)=>{
    orders.delete(req, res)
})
// Book Author



module.exports = {
    express,
    routes,
    verifyAToken
}
