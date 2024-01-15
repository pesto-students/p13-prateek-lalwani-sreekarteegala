// import React, { useState } from "react";
// import Book from './book.jsx'


// function BookList() {
//     const books = [
//         { title: 'Book 1', author: 'Author 1', year: 2020 },
//         { title: 'Book 2', author: 'Author 2', year: 2018 },
//         { title: 'Book 3', author: 'Author 3', year: 2022 },
//         // Add more books if you'd like
//     ];

//     const [bookList] = useState(books);

//     return (
//         <div>
//             <h1> Book List</h1>
//             <div className="book-list">
//                 {bookList.map((book, index) => <Book key={index} book={book}></Book>)}
//             </div>
//         </div>
//     )
// }

// import { Component } from "react"
// import BookDetails from "./BookDetails";
// import WithLogging from "./WithLogging";
// import { BookForm } from './BookForm';

// const BOOKS = [
//     { title: 'Book 1', author: 'Author 1', year: 2020 },
//     { title: 'Book 2', author: 'Author 2', year: 2018 },
//     { title: 'Book 3', author: 'Author 3', year: 2022 },
// ]

// class BookList extends Component {
//     constructor() {
//         super();
//         this.state = {
//             books: BOOKS
//         };
//     }

//     deleteBook = (index) => {
//         let updatedBooks = [...this.state.books]
//         updatedBooks.splice(index, 1);

//         this.setState({ books: updatedBooks });
//     }

//     addBook = (book) => {
//         this.setState((prevState) => ({
//             books: [...prevState.books, book],
//         }));
//     }
//     render() {
//         return (
//             <div>
//                 <div className="book-form">
//                     <BookForm addBook={this.addBook} />
//                 </div>
//                 <h1> Book List</h1>
//                 {this.state.books.length === 0 && "No Books added"}
//                 <div className="book-list">
//                     {this.state.books.map((book, index) =>
//                         <BookDetails key={index} book={book} deleteBook={this.deleteBook}></BookDetails>
//                     )}
//                 </div>
//             </div>
//         )
//     }
// }

import React, { useState, useContext } from "react"
import BookDetails from "./BookDetails";
import WithLogging from "./WithLogging";
import { BookForm } from './BookForm';
import { BookDataLoader } from './BookDataLoader';
import useBookFilter from "../hooks/useBookFilter";
import ThemeContext from "./Theme/ThemeContext";
import useBookSorting from "../hooks/useBookSorter";

function BookList() {
    const [books, setBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('');

    const deleteBook = (index) => {
        let updatedBooks = [...books]
        updatedBooks.splice(index, 1);
        console.log(updatedBooks)
        setBooks(updatedBooks);
    }

    const addBook = (book) => {
        setBooks((prev) => [...prev, book])
    }

    const filteredBooks = useBookFilter(books, searchTerm);
    const sortedBooks = useBookSorting(filteredBooks, sortBy);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSort = (e) => {
        setSortBy(e.target.value);
    }

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <div>
                <p>Current Theme: {theme}</p>
                <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
            <div className="book-form">
                <BookForm addBook={addBook} />
            </div>
            <h1> Book List</h1>
            <div>
                <label>
                    Search:
                    <input type="text" value={searchTerm} onChange={handleSearch} />
                </label>
            </div>
            <div>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={handleSort}>
                        <option value="">No Sorting</option>
                        <option value="title">Title</option>
                        <option value="author">Author</option>
                        <option value="year">Year</option>
                    </select>
                </label>
            </div>
            {books.length === 0 && <BookDataLoader setBooks={setBooks} />}
            <div className="book-list">
                {sortedBooks.map((book, index) =>
                    <BookDetails key={index} book={book} deleteBook={deleteBook}></BookDetails>
                )}
            </div>
        </div>
    )
}

export default WithLogging(BookList);