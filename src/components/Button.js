import React from 'react';
import s from "./Button.module.css"
import PropTypes from "prop-types";

const Button = ({callback, children}) => {
    return (
       <button className={s.button} onClick={callback}>{children}</button>
    );
};

/*Button.propTypes = {
    callback: PropTypes.func,
    children: PropTypes.string
}*/
export default Button;