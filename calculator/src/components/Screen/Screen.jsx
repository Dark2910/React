import PropTypes from 'prop-types';
import './Screen.css'

const Screen = ({input}) => (
    <div className = 'input'>{(input === 'Clear' || input === '=')? '' : input}</div>
);

Screen.propTypes = {
    input: PropTypes.string,
}

export default Screen;