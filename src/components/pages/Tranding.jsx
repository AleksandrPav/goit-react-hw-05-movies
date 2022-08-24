import getTrendingMovies from 'components/services/API';
import React, {useState,useEffect} from 'react';

const moviesImage = 'https://image.tmdb.org/t/p/w500';



export default function Trending() {
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const result = await getTrendingMovies();
            setMovies(result);
        }
        fetchData();
    }, []);
    return (
        <div className="container">
            <div className="row">
                {movies.map(movie => (
                    <div className="col-md-4" key={movie.id}>
                        <div className="card mb-4 box-shadow">
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        <img className="card-img-top" src={`${moviesImage}${movie.poster_path}`} alt={movie.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );


    }


