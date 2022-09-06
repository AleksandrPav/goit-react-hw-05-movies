import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Loader from './modules/Loader/Loader';

import { lazy, Suspense} from "react";

import css from "./App.module.css";

const Menu = lazy(() => import('./modules/Menu/Menu'));
const Home = lazy(() => import("./pages/HomePage/HomePage"));
const Movies = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const CastPage = lazy(() => import("./pages/CastPage/CastPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage/ReviewsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));


const App = () => {
  return (
    <section className={css.App}>
      <Suspense fallback={<Loader />}>
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
      </Suspense>;
    </section>
  );
};


export default App;