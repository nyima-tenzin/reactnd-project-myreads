import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import BookshelfBooks from './bookshelfbooks.js'
class Search extends Component {
    state = {
        allBooks: [],
        searchText: "",
        searchResult: [],
    }
    componentDidMount() {
        BooksAPI.getAll()
            .then((allBooks) => {
                this.setState({allBooks})
            })
    }
    addShelfToSearchResult = () => {
        this.state.searchResult.map((book) => book.shelf)
    }
    searchBooks = () => {
        const { allBooks, searchText } = this.state
        BooksAPI.search(searchText)
        .then((result) => {
            Array.isArray(result) && result.map((r) => {
                for (let b of allBooks) {
                    if (b.id === r.id) {r.shelf = b.shelf}
                }
            })
            this.setState({ searchResult: Array.isArray(result) ? result : [] }, this.addShelfToSearchResult())
        })
    }
    handleOnChange = (e) => {
        e.preventDefault()
        this.setState({ searchText: e.target.value }, this.searchBooks)
    }
    addBookToShelf = (book, shelf) => {
        BooksAPI.update(book, shelf)
            .then((shelf) => {
                //console.log(shelf)
             })
    }
    render() {
        const { searchText,searchResult } = this.state
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <form>
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                name="searchText"
                                value={searchText}
                                onChange={this.handleOnChange}
                            />
                        </form>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        <BookshelfBooks books={searchResult} updateBook={this.addBookToShelf}/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search