import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import css from "./MovieDetails.module.css";
import { getMovieDetails } from "../../services/API";
import Loader from 'components/modules/Loader/Loader';


const moviesImage = 'https://image.tmdb.org/t/p/w500'

const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
   

    
    

    useEffect(() => {
    
            setLoading(true);
            const fetchData = async () => {
                try {
                    const result = await getMovieDetails(Number(movieId));
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
        
        
    }, [movieId]);

    console.log(movie);

    const { title, poster_path, release_date, vote_average, overview, genres } = movie;

    return (
        <div className={css.container}>
        {loading && <Loader />}
        {error && <h1 className={css.error}>Error</h1>}
            <div>
                <button>Go Back</button>
                <div>
                    <img src={`${moviesImage}${poster_path}`} alt={title} className={css.moviesImage} />
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{ release_date}</p>
                    <p>User Score: {(vote_average * 10).toFixed(2)}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <ul>
                        {genres && genres.map(({ id, name }) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>

                </div>

        </div>
            
            
      </div>
    );
}


    
export default MovieDetails;



