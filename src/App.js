import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
  books: [],
  loading:false
  }

  getAllBooks=()=>{
    this.setState({
      loading:true
    })
    BooksAPI.getAll().then((books)=>{
      this.setState({
        books,
        loading:false
      })
    })
}

  componentDidMount() {
    BooksAPI.getAll().then(books => {
       this.setState({ books });
     });
  };

  // Change shelfs
  changeShelf = (book,shelf)=>{
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;
        this.setState(state => ({
          books: state.books.filter(item => item.id !== book.id).concat([book])
        }))
      });
  }

  render() {
// adding the browser router
    return (
        <div className="app">
              <Route exact path="/" render={() => (
              <ListBooks
                books={this.state.books}
                changeShelf={this.changeShelf} />
            )}
            />
            <Route path="/search" render={() => (
              <SearchBooks
                books={this.state.books}
                changeShelf={this.changeShelf} />
            )} />

            <button className="open-search">
                <Link to="/search">Search</Link>
            </button>
        </div>
    )
  }
}
export default BooksApp;
