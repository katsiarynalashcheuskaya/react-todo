import React, {useState} from 'react';

const AddTodoForm = (onAddTodo) => {
    const [todoTitle, setTodoTitle] = useState('');
    const handleAddTodo = (e) => {
        e.preventDefault();
        onAddTodo({title: todoTitle, id: Date.now()});
        console.log(todoTitle);
        setTodoTitle('');
    }
    const handleTitleChange = (e) => {
        const newTodoTitle = document.getElementById("todoTitle").value;
        setTodoTitle(newTodoTitle);
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange}></input>
            <button>Add</button>
        </form>
    )
};

export default AddTodoForm;