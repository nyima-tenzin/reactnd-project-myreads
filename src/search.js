import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI.js'
import BookshelfBooks from './bookshelfbooks.js'
class Search extends Component {

    state = {
        searchText: '',
        searchResult: [],
    }
    searchBooks = () => {
        const { searchText } = this.state
        BooksAPI.search(searchText)
        .then((books) => {
            !books.error ? this.setState({ searchResult: books }) : this.setState({ searchResult: [] })
        })
    }
    handleOnChange = (e) => {
        e.preventDefault()
        this.setState({ searchText: e.target.value }, this.searchBooks)
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
                        <BookshelfBooks books={searchResult} />
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search