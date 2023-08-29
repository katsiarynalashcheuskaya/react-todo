import React from 'react';
import s from "./Button.module.css"

const Button = ({callback, children}) => {
    return (
       <button className={s.button} onClick={callback}>{children}</button>
    );
};

export default Button;