import React, {useState} from 'react';
import InputWithLabel from "./InputWithLabel";


const AddTodoForm = React.memo(({callback}) => {
    const [title, setTitle] = useState('');
    const handleAddTodo = (e) => {
        e.preventDefault();
        title.trim() ? callback(title) : alert('Enter a title :)')
        setTitle('');
    }
    const handleTitleChange = () => {
        const newTodoTitle = document.getElementById("todoTitle").value;
        setTitle(newTodoTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel value={title} onChange={handleTitleChange}>Title: </InputWithLabel>
            <button>Add</button>
        </form>
    )
})

export default AddTodoForm;