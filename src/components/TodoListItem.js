import React from 'react';
import Button from "../button";
import Task from "./Task";

const TodoListItem = ({todo, onRemoveTodo, id, tasks}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
            <li>
                {todo}
                <Button callback={callbackHandler}>X</Button>
                <Task tasks={tasks} id={id}/>
            </li>
    )
};

export default TodoListItem;