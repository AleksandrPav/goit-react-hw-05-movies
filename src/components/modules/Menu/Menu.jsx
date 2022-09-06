import css from "./Menu.module.css";
import { NavLink } from "react-router-dom";


const getClassName = ({ isActive }) => {
    const className = isActive ? `${css.link} ${css.active}` : css.link;
    return className;
}

const Menu = () => {
    return (
        <div className={css.Menu}>
            <ul className={css.items}>
                <li><NavLink className={getClassName} to="/">Home</NavLink></li>
                <li><NavLink className={getClassName} to="/movies">Movies</NavLink></li>
            </ul>
        </div>
    );
}


export default Menu;