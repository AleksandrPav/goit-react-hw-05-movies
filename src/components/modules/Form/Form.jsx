import React from "react";


export default function Form(search, onFormSubmit) {
    return (
        <form action="" onSubmit={onFormSubmit}>
            <button type="button" >Search</button>
            <input type="text" value={search} onChange={onFormSubmit} />
        </form>

    );
}