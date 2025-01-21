import { PulseLoader } from "react-spinners";
import "./loader.css";

const Loader = () => {
    return (
        <div className="loader-container">
            <PulseLoader
                color="#3498db"
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Loader;
