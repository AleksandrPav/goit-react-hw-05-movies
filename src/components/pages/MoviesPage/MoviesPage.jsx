import React, {useEffect, useState } from "react";
import { getMovie } from "components/services/API";
import Form from "components/modules/Form/Form";
import Loader from "components/modules/Loader/Loader";
import css from "./MoviesPage.module.css";
import { Link, useSearchParams, useLocation } from "react-router-dom";
import { BiCameraMovie } from 'react-icons/bi';

import PropTypes from "prop-types";





export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notFound, setNotFound] = useState(false);


    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get("query");


    const handleSubmit = (search) => {
        setSearchParams({ query: search });
    };


    useEffect(() => {
        if (!search) {
            return;
        }

        
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getMovie(search);
                setMovies(result);

                if (result.length === 0) {
                    setNotFound(true);
                }
                

            } catch (error) {
                setError(error);
                Promise.reject(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();

        
    
    }, [search]);


    return (
        
        <div className={css.container}>
            <Form onSubmit={handleSubmit} />
            {loading && <Loader />}
            {error && <h1 className={css.error}>Error</h1>}
            {notFound && <h1 className={css.notFound}>Search with name <span>"{search}"</span> not found</h1>}
            <div className={css.row}>
                <ul className={css.items}>
                    {movies.map(({ id, title }) => (
                        <li className={css.item} key={id}>
                            <Link
                                state={{ from: location }}
                                to={`/movies/${id}`}
                                className={css.itemLink}
                            >
                                <span className={css.iconItem}><BiCameraMovie className={css.icon} /></span>
                                <h3 className={css.title}>{title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    );
}

Movies.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            poster_path: PropTypes.string,
        })
    ),
};