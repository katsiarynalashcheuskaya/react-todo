import React, {useRef} from 'react';
import PropTypes from "prop-types";

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

ReusableInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.object,
    placeholder: PropTypes.string,
    maxLengthValue: PropTypes.string
}

export default ReusableInput;