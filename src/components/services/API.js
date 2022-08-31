import axios from "axios";

const API_KEY = "2ad314a52028ffb1db124a28b0df35b2";
const URL = "https://api.themoviedb.org/3/";
const OPTIONS = "trending/movie/day"

const getTrendingMovies = async () => {
    const {data} = await axios.get(`${URL}${OPTIONS}?api_key=${API_KEY}`);
    return data.results;
}



const getMovieDetails = async (movieId) => {
    if (!movieId) {
        return;
    }
    const { data } = await axios.get(`${URL}movie/${movieId}?api_key=${API_KEY}`);
    return data;
}

const getMovieCast = async (movieId) => {
    if (!movieId) {
        return;
    }
    const { data } = await axios.get(`${URL}movie/${movieId}/credits?api_key=${API_KEY}`);
    return data.cast;
}

const getMovieReviews = async (movieId) => {
    if (!movieId) {
        return;
    }
    const { data } = await axios.get(`${URL}movie/${movieId}/reviews?api_key=${API_KEY}`);
    return data.results;
}




export { getTrendingMovies, getMovieDetails , getMovieCast, getMovieReviews};

