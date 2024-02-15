import './Testimony.css';
import PropTypes from 'prop-types';
import Emma from '../../images/Emma-testimony.png';
import Sarah from '../../images/Sarah-testimony.png';
import Shawn from '../../images/Shawn-testimony.png';

const imageMapping = {
    Emma: Emma,
    Sarah: Sarah,
    Shawn: Shawn,
};

const Testimony = (props) => {
    const testimonialImagePath = imageMapping[props.img];
    return(
        <div className='container-testimony'>
            <img 
                src={testimonialImagePath}
                alt={`${props.name}-img`}
            />
            <div>
                <p className='name'><strong>{props.name}</strong> in {props.country}</p>
                <p className='job'>{props.position} at <strong>{props.company}</strong></p>
                <p className='text'>&quot;{props.testimony}&quot;</p>
            </div>
        </div>
    );
}

Testimony.propTypes = {
    img: PropTypes.img,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    testimony: PropTypes.string.isRequired
}

export default Testimony;