// src/hooks/useBookSorting.js
import { useMemo } from 'react';

const useBookSorting = (books, sortBy) => {
    const sortedBooks = useMemo(() => {
        const sorted = [...books];
        sorted.sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'author') {
                return a.author.localeCompare(b.author);
            } else if (sortBy === 'year') {
                return a.year - b.year;
            }
            return 0; // No sorting
        });
        return sorted;
    }, [books, sortBy]);

    return sortedBooks;
};

export default useBookSorting;
