import React, { Component } from 'react'
import BookshelfBooks from './bookshelfbooks.js'
import * as BooksAPI from './BooksAPI'

class ListBooks extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.setState(() => ({
                    books
            }))
        })
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then((shelf) => {
                console.log("response", shelf)
             })

    }
    render() {
        const { books } = this.state
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
        const read = books.filter(book => book.shelf === "read")
        const wantToRead = books.filter(book => book.shelf === "wantToRead")

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <BookshelfBooks books={currentlyReading} updateBook={this.updateBook} />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <BookshelfBooks books={wantToRead} updateBook={this.updateBook} />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <BookshelfBooks books={read} updateBook={this.updateBook} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks