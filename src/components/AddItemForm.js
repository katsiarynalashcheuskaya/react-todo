import React, {useState} from 'react';
import ReusableInput from "./ReusableInput";
import s from "./AddItemForm.module.css"


const AddItemForm = React.memo(({callback, placeholder, id, buttonTitle}) => {
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
            <ReusableInput value={title} onChange={handleTitleChange} placeholder={placeholder}></ReusableInput>
            <button>{buttonTitle}</button>
        </form>
    )
})

export default AddItemForm;