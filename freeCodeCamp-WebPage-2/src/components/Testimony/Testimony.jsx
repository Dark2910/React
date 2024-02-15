import './Testimony.css';
import React from 'react';
import PropTypes from 'prop-types';
import Emma from '../../images/Emma-testimony.png';
import Sarah from '../../images/Sarah-testimony.png';
import Shawn from '../../images/Shawn-testimony.png';

class Testimony extends React.Component {

    render(){
        const imageMapping = {
            Emma: Emma,
            Sarah: Sarah,
            Shawn: Shawn,
        };
        
        const testimonialImagePath = imageMapping[this.props.img];

        return(
            <div className='container-testimony'>
            <img 
                src={testimonialImagePath}
                alt={`${this.props.name}-img`}
            />
            <div>
                <p className='name'><strong>{this.props.name}</strong> in {this.props.country}</p>
                <p className='job'>{this.props.position} at <strong>{this.props.company}</strong></p>
                <p className='text'>&quot;{this.props.testimony}&quot;</p>
            </div>
        </div>
        );
    }
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
