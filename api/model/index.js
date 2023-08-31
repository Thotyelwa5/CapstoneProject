const Users = require('./user')
const Orders = require('./order')
const Books = require('./books')
const BookAuthors = require('./bookAuth')
//Export all objects
module.exports = {
    users: new Users(),
    orders: new Orders(),
    books: new Books(),
    bookAuth: new BookAuthors()
}
 