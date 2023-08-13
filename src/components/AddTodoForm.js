import React, {useState} from 'react';
import ReusableInput from "./InputWithLabel";


const AddItemForm = React.memo(({callback, placeholder}) => {
    const [title, setTitle] = useState('');
    const handleAddTodo = (e) => {
        e.preventDefault();
        callback(title);
        /*title.trim() ? callback(title) : alert('Enter a title :)')*/
        setTitle('');
    }
    const handleTitleChange = () => {
        const newItemTitle = document.getElementById("itemTitle").value;
        setTitle(newItemTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <ReusableInput value={title} onChange={handleTitleChange} placeholder={placeholder}></ReusableInput>
            <button>+</button>
        </form>
    )
})

export default AddItemForm;