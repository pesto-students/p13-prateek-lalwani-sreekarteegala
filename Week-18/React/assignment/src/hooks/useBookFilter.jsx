// src/hooks/useBookFilter.js
import { useMemo } from 'react';

const useBookFilter = (books, searchTerm) => {
  const filteredBooks = useMemo(() => {
    // If the search term is empty, return the original books list
    if (!searchTerm.trim()) {
      return books;
    }

    // Convert the search term to lowercase for case-insensitive matching
    const searchTermLower = searchTerm.toLowerCase();

    // Filter books based on the search term
    return books.filter((book) =>
      book.title.toLowerCase().includes(searchTermLower) ||
      book.author.toLowerCase().includes(searchTermLower)
    );
  }, [books, searchTerm]);

  return filteredBooks;
};

export default useBookFilter;
