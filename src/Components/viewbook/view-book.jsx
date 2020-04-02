import React from 'react';
import * as BooksAPI from "BooksAPI";

class ViewBook extends React.Component {

    constructor(props) {
        
        super(props);

        this.state = {};
    }

    componentDidMount() {
        let url = window.location.href;
        url = url.split('?')

        BooksAPI.get(url[1]).then( book => {
            this.setState({
                book: book,
                title: book.title,
                description: book.description,
                image: book.imageLinks.thumbnail
            }, () => console.log(this.state))
        })
    }

    render() {
        return(
            <React.Fragment>
            <div> book title: { this.state.title } </div>
            <div
                className="book-cover"
                style={{
                    width: 128,
                    height: 193,
                    backgroundImage:
                        `url(${this.state.image})`
                }}
            ></div>
            <p>{this.state.description}</p>
            </React.Fragment>
        )
    }
}

export default ViewBook;