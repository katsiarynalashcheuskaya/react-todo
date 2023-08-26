import React from 'react';
import Button from "../button";
import Task from "./Task";
import s from "./TaskItem.module.css"

const TodoListItem = ({todo, onRemoveTodo, id, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
            <li className={s.todoTitle}>
                {todo}
                <Button callback={callbackHandler}>x</Button>
                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask} onAddTask={onAddTask} changeTaskStatus={changeTaskStatus}/>
            </li>
    )
};

export default TodoListItem;