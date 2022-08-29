import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div className={css.Loader}>
        <ThreeDots type="ThreeDots" color="#dd1818" height={80} width={80} />
        </div>
    );
}
    
export default Loader;