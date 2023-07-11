import React from 'react';

const Button = ({callback, children}) => {
    const onClickHandler = () => {
        callback();
    }
    return (
       <button onClick={onClickHandler}>{children}</button>
    );
};

export default Button;