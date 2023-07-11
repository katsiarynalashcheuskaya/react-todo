import React, {useState} from 'react';
import InputWithLabel from "./InputWithLabel";

const AddTodoForm = ({onAddTodo}) => {
    const [todoTitle, setTodoTitle] = useState('');
    const handleAddTodo = (e) => {
        e.preventDefault();
        todoTitle.trim() ? onAddTodo({title: todoTitle, id: Date.now()}) : alert('Enter a title :)')
        setTodoTitle('');
    }
    const handleTitleChange = (e) => {
        const newTodoTitle = document.getElementById("todoTitle").value;
        setTodoTitle(newTodoTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <InputWithLabel value={todoTitle} onChange={handleTitleChange}>Title: </InputWithLabel>
            <button>Add</button>
        </form>
    )
};

export default AddTodoForm;