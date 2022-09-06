import React, { useState, useEffect } from 'react';
import { useParams} from "react-router-dom";
import css from "./Reviews.module.css";
import { getMovieReviews } from "../../services/API";
import Loader from 'components/modules/Loader/Loader';


const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const result = await getMovieReviews(Number(movieId));
                setReviews(result);
                setLoading(false);
            } catch (error) {
                setError(true);
                Promise.reject(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    } , [movieId]);
    
    return (
        <div className={css.container}>
            {loading && <Loader />}
            {error && <h1 className={css.error}>Error</h1>}
            {reviews.length < 1 ? <h1 className={css.error}>No reviews</h1> : (
            <ul className={css.list}>
                {reviews.map(({ id, author, content }) => (
                    <li key={id} className={css.item}>
                        <p className={css.author}><span>Author: </span> {author}</p>
                        <p className={css.content}>{content}</p>
                    </li>
                ))}
            </ul>)}
        </div>
    );
}

export default Reviews;