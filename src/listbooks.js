import React, { Component } from 'react'
import BookshelfBooks from './bookshelfbooks.js'

class ListBooks extends Component {
    render() {
        const { books } = this.props
        const currentlyReading = books.filter(book => book.shelf === "currentlyReading")
        const read = books.filter(book => book.shelf === "read")
        const wantToRead = books.filter(book => book.shelf === "wantToRead")

        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <BookshelfBooks books={currentlyReading}/>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <BookshelfBooks books={read}/>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <BookshelfBooks books={wantToRead}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListBooks