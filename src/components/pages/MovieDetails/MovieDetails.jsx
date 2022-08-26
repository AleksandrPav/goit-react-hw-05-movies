import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from "./MovieDetails.module.css";
import { getMovieDetails } from "../../services/API";
import Loader from 'components/modules/Loader/Loader';;


const MovieDetails = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { idParams } = useParams();

    const {id} = parseInt(idParams);
    

    
    
    
    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
        try {
            const result = await getMovieDetails(id);
            setMovie(result);
            setLoading(false);
        } catch (error) {
            setError(true);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);
    
    console.log(typeof(id));

    if (loading) {
        return <div className={css.loader}><Loader /></div>;
    }
    if (error) {
        return <div>Error</div>
    }


    return (
        <div className={css.MovieDetails}>
        
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        </div>
    );
}
    
export default MovieDetails;



