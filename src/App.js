import React from 'react'
import { Link, Route } from 'react-router-dom'
import ListBooks from './listbooks.js'
import Search from './search'
import './App.css'

const BooksApp = () => (
  <div className="app">
        <Route exact path = '/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <ListBooks/>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
        )} />
        <Route exact path='/search' render={() => (<Search />)} />
      </div>
)
  
export default BooksApp
