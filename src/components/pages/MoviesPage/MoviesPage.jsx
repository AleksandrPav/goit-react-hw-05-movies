import React, {useEffect, useState } from "react";
import { getMovie } from "components/services/API";
import Form from "components/modules/Form/Form";
import Loader from "components/modules/Loader/Loader";
import css from "./MoviesPage.module.css";
import { useParams, Link } from "react-router-dom";




export default function Movies() {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

 

    function onFormSubmit(e) {
        e.preventDefault();

    }


    return (
        <div className={css.container}>
            <Form 
                search={search}
                onFormSubmit={onFormSubmit}
            />
            
        </div>
    );
}