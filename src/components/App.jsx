import {Routes, Route} from 'react-router-dom';

import css from "./App.module.css";
import Menu from "./modules/Menu/Menu";
import Home from "./pages/HomePage/HomePage";
import Movies from "./pages/MoviesPage/MoviesPage";



const App = () => {
  return (
    <section className={css.App}>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </section>
  );
};


export default App;