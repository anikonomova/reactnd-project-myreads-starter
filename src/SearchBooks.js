import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {

    render() {
        const { changeShelf } = this.props;
        const { query, searchedBooks } = this.state;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={ query } onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {searchedBooks.map((book, index) => (
                        <li key={ index }>
                            <Book book={ book } books={ searchedBooks } changeShelf={ changeShelf } />
                        </li>
                    ))}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}
export default SearchBooks;
