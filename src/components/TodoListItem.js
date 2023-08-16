import React from 'react';
import Button from "../button";
import Task from "./Task";

const TodoListItem = ({todo, onRemoveTodo, id, tasks, onRemoveTask, onAddTask, onStatusChange}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
            <li>
                {todo}
                <Button callback={callbackHandler}>x</Button>
                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask} onAddTask={onAddTask} onStatusChange={onStatusChange}/>
            </li>
    )
};

export default TodoListItem;