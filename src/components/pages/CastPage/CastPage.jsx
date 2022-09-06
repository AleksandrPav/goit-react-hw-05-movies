import React, { useState, useEffect } from 'react';
import { getMovieCast } from "../../services/API";
import { useParams} from "react-router-dom";
import Loader from 'components/modules/Loader/Loader';



import css from "./Cast.module.css";


const Cast = () => {
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
        try {
            const result = await getMovieCast(Number(movieId));
            setCast(result);
            setLoading(false);
        } catch (error) {
            setError(true);
            Promise.reject(error);
        } finally {
            setLoading(false);
        }
        };
        fetchData();
    }, [movieId]);
    
    return (
        <div className={css.container}>
        {loading && <Loader />}
            {error && <h1 className={css.error}>Error</h1>}
            {cast.length < 1 ? <h1 className={css.error}>No cast</h1> : (
        <ul className={css.list}>
            {cast.map(({ id, name, profile_path, character }) => (
            <li key={id} className={css.item}>
                <img
                src={(profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`) || "https://pbs.twimg.com/media/C5OTOt3UEAAExIk.jpg"}
                alt={name}
                className={css.image}
                />
                <p className={css.name}>{name}</p>
                <p className={css.character}>Character: {character}</p>
            </li>
            ))}
        </ul>)}
        </div>
    );
   
}





   
export default Cast;
