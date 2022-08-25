import {Routes, Route} from 'react-router-dom';

import css from "./App.module.css";
import Menu from "./modules/Menu/Menu";
import Home from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/MoviesPage";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';



const App = () => {
  return (
    <section className={css.App}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
};


export default App;