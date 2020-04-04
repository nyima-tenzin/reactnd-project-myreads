import React, { Component } from 'react'

class BookshelfBooks extends Component {
    render() {
        const { books } = this.props
        return (
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { books.map( book => (
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})` }}></div>
                                    <div className="book-shelf-changer">
                                    <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">
                                    { book.authors && book.authors.map( author => (
                                        <p key={author}>{author}</p>
                                    )) }
                                </div>
                            </div>
                      </li>
                    )) }
                </ol>
            </div>
        )
    }
}

export default BookshelfBooks