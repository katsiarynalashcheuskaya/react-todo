import React, {useState} from 'react';
import ReusableInput from "./ReusableInput";
import s from "./AddItemForm.module.css"
import PropTypes from "prop-types";


const AddItemForm = React.memo(({callback, placeholder, id, buttonTitle, maxLengthValue}) => {
    const [title, setTitle] = useState('');
    const handleAddItem = (e) => {
        e.preventDefault();
        title.trim() ? callback(title, id) : alert('Enter a title :)')
        setTitle('');
    }
    const handleTitleChange = (e) => {
        const newItemTitle = e.currentTarget.value;
        setTitle(newItemTitle);
    }
    return (
        <form onSubmit={handleAddItem}>
            <ReusableInput value={title} onChange={handleTitleChange} maxLengthValue={maxLengthValue} placeholder={placeholder}></ReusableInput>
            <button>{buttonTitle}</button>
        </form>
    )
})

AddItemForm.propTypes = {
    callback: PropTypes.func,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    buttonTitle: PropTypes.string,
    maxLengthValue: PropTypes.string
};

export default AddItemForm;