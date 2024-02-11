import './Button.css'
import PropTypes from 'prop-types';

const Button = (props) => {
    const isOperator = (value) => {
        return (isNaN(value) && (value != '.') && (value != '=') && (value != 'Clear'));
    }
    const isClear = (value) => {
        return (value === 'Clear');
    }
    const buttonClasses = ['btn', `${isOperator(props.value)? 'operator' : ''}`, `${isClear(props.value)? 'clear' : ''}`].filter(className => className !== '') 

    return(
        <button className = {buttonClasses.join(' ')} onClick={props.buttonClick}>{props.value}</button> 
    );
}

Button.propTypes = {
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
    buttonClick: PropTypes.func.isRequired,
}

export default Button;