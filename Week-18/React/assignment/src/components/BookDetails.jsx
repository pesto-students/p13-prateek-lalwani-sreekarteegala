import React, { useState } from "react";
import WithLogging from "./WithLogging";

function BookDetails({ book, index, deleteBook }) {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="book">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <div>
                <button onClick={() => deleteBook(index)} style={{marginRight:'10px'}}>Delete</button>

                <button onClick={toggleDetails}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div>

            {showDetails && (
                <div>
                    {/* Additional details, you can customize this part based on your needs */}
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <p>Genre: Fiction</p>
                </div>
            )}
        </div>

    );
}

export default WithLogging(BookDetails);