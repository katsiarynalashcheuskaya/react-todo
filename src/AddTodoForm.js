import React from 'react';

const AddTodoForm = (props) => {
    const handleAddTodo = (e) => {
        e.preventDefault();
        const todoTitle = document.getElementById("todoTitle").value;
        props.onAddTodo(todoTitle);
        console.log(todoTitle);
        document.getElementById("todoTitle").value = "";
    }
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor='todoTitle'>Title</label>
            <input id='todoTitle' name='title'></input>
            <button>Add</button>
        </form>
    )
};

export default AddTodoForm;