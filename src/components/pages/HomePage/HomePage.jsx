import React, { useState, useEffect } from 'react';
import {getTrendingMovies} from 'components/services/API';
import css from './HomePage.module.css';
import { BiCameraMovie } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Loader from 'components/modules/Loader/Loader';

const moviesImage = 'https://image.tmdb.org/t/p/w500';



export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const result = await getTrendingMovies();
                setMovies(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
            }
        fetchData();
    }, []);

    
    return (
        
        <div className={css.container}>
            {loading && <Loader />}
            {error && <h1 className={css.error}>Error</h1>}
            <div className={css.row}>
                <h2 className={css.mainTitle}>Trending today</h2>
                <ul className={css.items} >
                {movies.map(({id, title, release_date, poster_path}) => (
                        <li className={css.item} key={id}>
                            <Link to={`/movies/${id}`} className={css.itemLink}>
                            <span className={css.iconItem}><BiCameraMovie className={css.icon} /></span>
                            <h3 className={css.title}>{title}</h3>
                            <img src={`${moviesImage}${poster_path}`} alt={title} className={css.moviesImage} />
                            </Link>
                        </li>
                ))}
                    </ul>
            </div>
        </div>
    );


    }


