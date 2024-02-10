import './Button.css'
import PropTypes from 'prop-types';

const Button = (props) => {
    const isOperator = (value) => {
        return (isNaN(value) && (value != '.') && (value != '='));
    }
    return(
        <button className={`btn-container ${isOperator(props.value)? 'operator': ''}`.trim()}>{props.value}</button> 
    );
}

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
    isOperator: PropTypes.func,
}

export default Button;