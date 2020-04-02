import React from 'react';
import * as BooksAPI from "BooksAPI";
import Book from '../book/book';
import { Link } from 'react-router-dom';

function Search({searchResult, addBooks, updateSearch}) {

    const onSearchChange = (event) => {
        BooksAPI.search(event.target.value).then(books => {
            updateSearch(books)
        })
    }

    return(
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/'>
                    <button
                    className="close-search"
                    >
                    Close
                    </button>
                </Link>

                <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" onChange={onSearchChange} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                {
                    searchResult !== undefined && searchResult.length > 0 
                    ?
                    searchResult.map( book => {
                        return <Book key={book.id} book={book} updateBooks={addBooks}/>
                    })
                    :
                    <div>no result</div>
                }
                </ol>
            </div>
            </div>
    )

}

export default Search;