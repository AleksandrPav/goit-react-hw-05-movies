import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import css from "./App.module.css";
import Menu from "./modules/Menu/Menu";
import Home from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/MoviesPage";
import MovieDetails from './pages/MovieDetails/MovieDetails';
import CastPage from './pages/CastPage/CastPage';
import ReviewsPage from './pages/ReviewsPage/ReviewsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';





const App = () => {
  return (
    <section className={css.App}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
       <ToastContainer
        position="top-right"
        fontSize="5px"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            />
    </section>
  );
};


export default App;