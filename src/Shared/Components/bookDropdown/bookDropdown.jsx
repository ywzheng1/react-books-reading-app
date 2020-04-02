import React from 'react';
import * as BooksAPI from "BooksAPI";

function RenderOptions({shelf}) {
    const options = ['currentlyReading', 'wantToRead', 'read', 'none']

    return(
        options.map(option => {
            return option === shelf ? 
            <option key={option} value={`${option}`} selected>{option}</option>
            :
            <option key={option} value={`${option}`}>{option}</option>
            ;
        })
    )
}

function BookDropdown({book, shelf, bookId, updateBooks}) {

    const onClickOption = (event) => {
        BooksAPI.update(book, event.target.value);
        updateBooks(bookId, event.target.value, book)
    }
    
    return(
        <div className="book-shelf-changer">
            <select onChange={onClickOption}>
                <option value="move" disabled>
                    Move to...
                </option>
                <RenderOptions shelf={shelf}/>
            </select>
            
        </div>
    )
}

export default BookDropdown;