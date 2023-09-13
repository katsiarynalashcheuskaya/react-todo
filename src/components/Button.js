import React from 'react';
import s from "./Button.module.css"
import PropTypes from "prop-types";

const Button = ({callback, children, Filter}) => {
    let buttonClass = children===Filter? s.activeButton : ''
    return (
       <button className={`${s.button} + ${buttonClass}`} onClick={callback}>{children}</button>
    );
};

Button.propTypes = {
    callback: PropTypes.func,
    children: PropTypes.any,
    Filter: PropTypes.string
};

export default Button;