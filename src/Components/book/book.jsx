import React from 'react';
import { Link } from 'react-router-dom';
import BookDropdown from 'Shared/Components/bookDropdown/bookDropdown';

import './book.style.scss';

function Book({book, updateBooks}) {
    return(
        <React.Fragment>
        
            <div className="book">
                <div className="book-image-wrapper">
                    <Link to={`/book/viewbook/?${book.id}`}>
                        <img className='book-image' src={book.imageLinks.thumbnail} /> 
                    </Link>
                </div>

                <div className='book-detail-wrapper'>
                    <div className="book-detail">
                        <h4 className='book-title'>{book.title}</h4>
                        <p className='book-author'>{book.authors}</p>
                    </div>

                    <div className='shelf-changer'>
                            <BookDropdown book={book} shelf={book.shelf} bookId={book.id} updateBooks={updateBooks}/>
                    </div>
                </div>
          
                    {/* {
                        book.authors.length > 1
                        ?
                        <div className="book-authors">{book.authors.join(', ')}</div>
                        :
                        <div className="book-authors">{book.authors}</div>
                    } */}
            </div>
        </React.Fragment>
    )
}

export default Book;