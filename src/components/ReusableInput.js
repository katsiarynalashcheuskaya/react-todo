import React, {useRef} from 'react';

const ReusableInput = ({value, onChange, children, placeholder, maxLengthValue}) => {
    const inputRef = useRef();

    return (
        <>
            <label htmlFor='itemTitle'>{children}</label>
            <input id='itemTitle'
                   name='title'
                   ref={inputRef}
                   value={value}
                   onChange={onChange}
                   maxLength={maxLengthValue}
                   placeholder={placeholder}></input>
        </>
    );
};

export default ReusableInput;