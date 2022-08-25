import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="Loader">
        <ThreeDots type="ThreeDots" color="#dd1818" height={80} width={80} />
        </div>
    );
}
    
export default Loader;