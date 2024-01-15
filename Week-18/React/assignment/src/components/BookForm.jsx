import React, { useState } from "react";

const BOOKDETAILS = {
    title: '',
    author: '',
    year: '',
}

export function BookForm({ addBook }) {
    const [bookDetails, setBookDetails] = useState(BOOKDETAILS);
    const [err, setErr] = useState(null);

    const isMandatoryFieldsMissing = () => {
        if (!bookDetails.title || !bookDetails.author || !bookDetails.year) {
            return true;
        }

        return false;
    }

    const onChange = (e) => {
        if(!isMandatoryFieldsMissing()){
            setErr(null)
        }
        setBookDetails({ ...bookDetails, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isMandatoryFieldsMissing()) {
            setErr("Please fill all fields");
            return;
        }

        addBook(bookDetails);
        setBookDetails(BOOKDETAILS);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h2>Add New Form</h2>
                <div className="formField">
                    <label className="formLabel" id="Title">Title: </label>
                    <input className="formInput" type="string" name="title" placeholder="Title" value={bookDetails.title} onChange={onChange} />
                </div>
                <div className="formField">
                    <label className="formLabel" htmlFor="Author">Author: </label>
                    <input className="formInput" type="string" name="author" placeholder="Author" value={bookDetails.author} onChange={onChange} />
                </div>
                <div className="formField">
                    <label className="formLabel" id="idYear" htmlFor="Year">Year: </label>
                    <input className="formInput" type="string" name="year" placeholder="Year" value={bookDetails.year} onChange={onChange} maxLength={4} pattern="\d{4}"/>
                </div>
                <button type="submit">Add Book</button>
            </form>
            <p style={{ color: 'red' }}>{err}</p>
        </div>
    )
}
