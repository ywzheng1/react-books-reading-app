import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import BookCollection from "./Components/book-collection/book-collection";
import Search from "./Components/search/search";
import ViewBook from "./Components/viewbook/view-book";

import "./App.css";
import "./App.scss";
import Header from "./Components/header/header";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
	searchResult: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  addBooks = (id, newShelf, book) => {

	const { ...books } = this.state.books;
	let newBooks = [];

	for ( const key in books ) {
		newBooks = [...newBooks, books[key]]
	}

	book.shelf = newShelf;

	newBooks = [...newBooks, book]

	this.setState({
		books: newBooks
	})
  }

  updateBooks = (id, newShelf, book) => {

	const { ...books } = this.state.books;
	let newBooks = [];

	// update book's shelf and store to a new array
	for ( const key in books ) {
		if(books[key].id === id) {
			books[key].shelf = newShelf
			newBooks = [...newBooks, books[key]]
		} else {
			newBooks = [...newBooks, books[key]]
		}
	}

	this.setState({
		books: newBooks
	})
  }

  updateSearch = (searchResult) => {
	  this.setState({
		  searchResult
	  })
  }


  render() {

	const allBooks = this.state.books.filter(books => {
		return books;
	  });
	
    const currentlyReading = this.state.books.filter(books => {
      return books.shelf === "currentlyReading";
	});
	
	const wantToRead = this.state.books.filter(books => {
		return books.shelf === "wantToRead";
	});

	const read = this.state.books.filter(books => {
		return books.shelf === "read";
	});
	
	console.log(this.state)

    return (
		<div className="app">

				<Route exact path='/search'>
					<Search 
						searchResult={this.state.searchResult} 
						updateSearch={this.updateSearch} 
						addBooks={this.addBooks}
					/>
				</Route>

				<Header />



					<ul className='horizontal-list'>
						<Link to='/'><li>All Books</li></Link>
						<Link to='/currentlyReading'><li>Currently Reading</li></Link>
						<Link to='/wantToRead'><li>Want to Read</li></Link>
						<Link to='/read'><li>Read</li></Link>
					</ul>

					<div className="list-books">

						<div className="list-books-content">
							<Switch>
								<Route exact path='/'>
									<BookCollection 
										shelfTitle='All Books' 
										books={allBooks} 
										updateBooks={this.allBooks}
										/>
								</Route>
								<Route path='/currentlyReading'>
									<BookCollection 
										shelfTitle='Currently Reading' 
										books={currentlyReading} 
										updateBooks={this.updateBooks}
										/>
								</Route>
								<Route path='/wantToRead'>
									<BookCollection 
										shelfTitle='Want to Read' 
										books={wantToRead} 
										updateBooks={this.updateBooks}
										/>
								</Route>
								<Route path='/read'>
									<BookCollection 
										shelfTitle='Read' 
										books={read} 
										updateBooks={this.updateBooks}
										/>
								</Route>
							</Switch>
						</div>

						<div className="open-search">
						<Link to='/search'>
							<button>
								Add a book
							</button>
						</Link>
						</div>

					</div>
		

				<Route path={`/book/viewbook/`}>
					<ViewBook />
				</Route>

		</div>
    );
  }
}

export default BooksApp;
