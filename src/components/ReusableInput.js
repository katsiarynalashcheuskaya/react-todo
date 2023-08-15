import React, {useEffect, useRef} from 'react';

const ReusableInput = ({value, onChange, children, placeholder}) => {
    const inputRef = useRef();
    useEffect(() => {
        //inputRef.current.focus()
    })
    return (
        <>
            <label htmlFor='itemTitle'>{children}</label>
            <input id='itemTitle'
                   name='title'
                   ref={inputRef}
                   value={value}
                   onChange={onChange}
                   placeholder={placeholder}></input>
        </>
    );
};

export default ReusableInput;