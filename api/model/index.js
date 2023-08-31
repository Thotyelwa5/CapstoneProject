const Users = require('./user')
const Orders = require('./order')
const Books = require('./books')
const BookAuthors = require('./bookAuth')
//Export all objects
module.exports = {
    user: new Users(),
    order: new Orders(),
    books: new Books(),
    bookAuth: new BookAuthors()
}
 