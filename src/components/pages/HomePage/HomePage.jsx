import React, { useState, useEffect } from 'react';
import getTrendingMovies from 'components/services/API';
import css from './HomePage.module.css';
import { BiCameraMovie } from 'react-icons/bi';
import {NavLink} from 'react-router-dom';

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

    const titleName = (title, name) => {
        return title ? title : name;
    }
    const releaseDate = (release_date, first_air_date) => {
        return release_date ? release_date : first_air_date;
    }


    
    return (
        <div className={css.container}>
            <div className={css.row}>
                {movies.map(({id, title, name, release_date, first_air_date, poster_path}) => (
                    <ul className={css.items} key={id}>
                        <li className={css.item}>
                            <NavLink to={`/movies/${id}`} className={css.itemLink}>
                            <span className={css.iconItem}><BiCameraMovie className={css.icon} /></span>
                            <h3 className={css.title}>{titleName(title, name)}</h3>
                                <p className={css.text}>(Release Date: {releaseDate(release_date, first_air_date)})</p>
                                <img src={`${moviesImage}${poster_path}`} alt="" className={css.moviesImage} />
                            </NavLink>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    );


    }


