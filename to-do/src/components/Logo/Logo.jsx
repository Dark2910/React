import freeCodeCampLogo from './img/freeCodeCamp-logo.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className='container d-flex align-items-center justify-content-center'>
            <img className='img-fluid d-block mx-auto freeCodeCamp-logo' src={freeCodeCampLogo} alt='freeCodeCampLogo'/>
        </div>
    );
};

export default Logo;