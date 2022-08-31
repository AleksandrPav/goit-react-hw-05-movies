import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate, Outlet, NavLink} from 'react-router-dom';
import css from "./MovieDetails.module.css";
import { getMovieDetails } from "../../services/API";
import Loader from 'components/modules/Loader/Loader';
import GoBackBtn from 'components/modules/Button/GoBackBtn';




const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
    }
    
    console.log(location);
    const { from } = location.state;


   
    const goBack = () => navigate(from);
    
    console.log(location);
    

    useEffect(() => {
    
            setLoading(true);
            const fetchData = async () => {
                try {
                    const result = await getMovieDetails(Number(movieId));
                    setMovie(result);
                    setLoading(false);
                } catch (error) {
                    setError(true);
                    Promise.reject(error);

                }
                finally {
                    setLoading(false);

                }
            }
        fetchData();
    }, [movieId]);


    const { title, poster_path, release_date, vote_average, overview, genres, id } = movie;

    return (
        <div className={css.container}>
        {loading && <Loader />}
            {error && <h1 className={css.error}>Error</h1>}
            <div className={css.containerItems}>
            <div className={css.containerImage}>
               <GoBackBtn onClick={goBack}/>
                <div className={css.images}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={css.moviesImage} />
                </div>
                </div>
                <div className={css.info}>
                    <h2 className={css.title}>{title}</h2>
                    <p className={css.text}>{ release_date}</p>
                    <p className={css.text}>User Score: {(vote_average * 10).toFixed(2)}%</p>
                    <h3 className={css.title}>Overview</h3>
                    <p className={css.text}>{overview}</p>
                    <h3 className={css.title}>Genres</h3>
                    <ul className={css.genres}>
                        {genres && genres.map(({ id, name }) => (
                            <li className={css.genresItem} key={id}><p className={css.genresText}>{name}</p></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={css.navLink}>
            <NavLink state={{ from }} to={`/movies/${id}/cast`} className={getClassName}>Cast</NavLink>
            <NavLink state={{ from }} to={`/movies/${id}/reviews`} className={getClassName}>Reviews</NavLink>
            <Outlet />
            </div>
        </div>
        
        
    );
}


    
export default MovieDetails;



