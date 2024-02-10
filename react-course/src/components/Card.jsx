import PropTypes from 'prop-types';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) => {
    return(
        <div className='card'>
            <Link to={props.title}>
                <h2>{props.title}</h2>
            </Link>
            <p>{props.description}</p>
        </div>
    );
};

Card.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Card;
