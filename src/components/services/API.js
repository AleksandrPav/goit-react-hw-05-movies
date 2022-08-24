import axios from "axios";

const API_KEY = "2ad314a52028ffb1db124a28b0df35b2";
const URL = "https://api.themoviedb.org/3/";
const OPTIONS = "trending/all/day"

const getTrendingMovies = async () => {
    const response = await axios.get(`${URL}${OPTIONS}?api_key=${API_KEY}`);
    return response.data.results;
}

export default getTrendingMovies;
    
console.log(getTrendingMovies());
