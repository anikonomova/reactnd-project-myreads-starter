import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    render() {
        const { book } = this.props;

        return(
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : ''})` }}></div>
              <div className="book-shelf-changer">
                <select onChange={(e)=>{this.props.changeShelf(book,e.target.value);}} defaultValue={book.shelf}>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title ? book.title : ''}</div>
            <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>
          </div>
        );
    }
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
};

export default Book;
