import css from "./NotFoundPage.module.css";
import { Link } from "react-router-dom";


export default function NotFoundPage() {
    return (
        <div className={css.container}>
            <h2 className={css.title}>404 PAGE NOT FOUND</h2>
            <Link to="/" className={css.link}>Go to Home</Link>
        </div>
    );
}
    