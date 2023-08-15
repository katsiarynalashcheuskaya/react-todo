import React, {useState} from 'react';
import ReusableInput from "./ReusableInput";


const AddItemForm = React.memo(({callback, placeholder, id}) => {
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
            <button>+</button>
        </form>
    )
})

export default AddItemForm;