import React from "react";

function FormField({ label, type, placeholder }) {
    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </>
    )
}

export default FormField;