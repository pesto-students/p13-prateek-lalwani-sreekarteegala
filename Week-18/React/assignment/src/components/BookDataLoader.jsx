// src/BookDataLoader.js
import React, { useEffect } from 'react';
const initialBooks = [
    { title: 'Book 2', author: 'John Doe', year: 2018 },
    { title: 'Book 3', author: 'Bob Smith', year: 2022 },
    { title: 'Book 1', author: 'Alice Johnson', year: 2020 },
    // Add more books if you'd like
];

export const BookDataLoader = ({ setBooks }) => {
    useEffect(() => {
        // Simulate fetching book data (e.g., from an API)
        const fetchBookData = async () => {
            try {
                setBooks(initialBooks);
            } catch (error) {
                console.error('Error fetching book data:', error);
            }
        };

        // Call the fetchBookData function
        fetchBookData();
    }, [setBooks]); // Dependency array ensures that setBooks is only called once on mount

    return <div>Fetching book data...</div>;
};
