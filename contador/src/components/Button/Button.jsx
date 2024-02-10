import React from "react";
import './Button.css';

const Button = ({isClick, handleClick, text}) => {
    return(
        <button className={ isClick? 'btn-click' : 'btn-reset' } onClick={handleClick} >{text} </button>
    );
}

export default Button;