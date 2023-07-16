import React, {useEffect, useRef} from 'react';

const InputWithLabel = ({value, onChange, children}) => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus()
    })
    return (
        <>
            <label htmlFor='todoTitle'>{children}</label>
            <input id='todoTitle' name='title' ref={inputRef} value={value} onChange={onChange}></input>
        </>
    );
};

export default InputWithLabel;