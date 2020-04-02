import React from 'react';
import Book from '../book/book';

import './book-collection.style.scss';

function BookCollection({ shelfTitle, books, updateBooks }) {
    return (
        <div className="bookshelf">

            <h2 className="bookshelf-title">{shelfTitle}</h2>

            <div className="bookshelf-books">
                    {
                        books.map( book => {
                            return <Book key={book.id} book={book} updateBooks={updateBooks}/>
                        })
                    }
            </div>
        </div>
    )
}

export default BookCollection;