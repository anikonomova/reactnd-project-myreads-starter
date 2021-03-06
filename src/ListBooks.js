import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book.js';

function ListBooks (props) {

      const currentlyReadingBooks=props.books.filter((book=>book.shelf==='currentlyReading')).map((book)=>{
      return (
        <li key={book.id}>
          <Book
            book={book}
            changeShelf={props.changeShelf}
          />
        </li>
      )
    })
    const wantToReadBooks=props.books.filter((book=>book.shelf==='wantToRead')).map((book)=>{
      return (
        <li key={book.id}>
          <Book
            book={book}
            changeShelf={props.changeShelf}
          />
        </li>
      )
    })
    const readBooks=props.books.filter((book=>book.shelf==='read')).map((book)=>{
      return (
        <li key={book.id}>
          <Book
            book={book}
            changeShelf={props.changeShelf}
          />
        </li>
      )
    })
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReadingBooks}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToReadBooks}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {readBooks}
              </ol>
            </div>
          </div>
        </div>
      </div>
    )
}
export default ListBooks;
