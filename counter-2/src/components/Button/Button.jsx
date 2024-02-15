import React from "react";
import PropTypes from 'prop-types';
import './Button.css';


class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <button className={ this.props.isClick? 'btn-click' : 'btn-reset' } onClick={this.props.handleClick} >{this.props.text} </button>
        );
    }
}

Button.propTypes = {
    isClick: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;