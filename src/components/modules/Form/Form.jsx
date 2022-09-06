import React, { useState } from "react";
import css from "./Form.module.css";

import PropTypes from "prop-types";

import { toast } from "react-toastify";

export default function Form({onSubmit}) {
    const [search, setSearch] = useState("");
    
    const handleChange = (e) => {
        setSearch(e.target.value);
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
        if (search.trim() === "") {
            toast.error("Please enter your search");
            return;
        }
        formReset();

    };

    const formReset = () => {
        setSearch("");
    };
    
    return (
        <div className={css.formContainer}>
        <form onSubmit={handleSubmit} className={css.form}>
            <input 
                type="text"
                name="search"
                value={search}
                onChange={handleChange}
                    placeholder="Search movies"
                    className={css.input}
            />
            <button type="submit" className={css.button} >Search</button>
            </form>
            </div>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};