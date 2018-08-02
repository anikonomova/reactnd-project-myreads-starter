import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component {

    state = {
        query: '',
        books: [],
    }

//Search method

    updateQuery = (query) => {
        this.setState({ query, books: [] })
        if (query.length > 2) {
            BooksAPI.search(query).then((searched) => {
                    if(query === this.state.query)  {
                        this.setState({
                            books: searched.map((book) => {
                                let library = this.props.books.find((b) =>
                                (b.id === book.id));
                                book.shelf = library ? library.shelf : 'none';
                                return book;
                            })
                        });

                } else {
                    this.setState({
                        books: []
                    });
                }
            });
        } else {
            this.setState({
                books: []
            });
        }
}

    render() {
        const {  changeShelf } = this.props;
        const { query, books } = this.state;

        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                        type="text"
                        placeholder="Search by title or author"
                        value={ query } onChange={(e) => this.updateQuery(e.target.value)}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {books.map((book, index) => (
                        <li key={ index }>
                            <Book
                            book={ book }
                            books={ books }
                            changeShelf={ changeShelf } />
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
