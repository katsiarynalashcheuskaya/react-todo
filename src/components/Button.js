import React from 'react';
import s from "./Button.module.css"

const Button = ({callback, children, Filter}) => {
    let buttonClass = children===Filter? s.activeButton : ''
    return (
       <button className={`${s.button} + ${buttonClass}`} onClick={callback}>{children}</button>
    );
};

export default Button;