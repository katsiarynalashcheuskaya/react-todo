import React from 'react';
import Button from "../button";
import Task from "./Task";
import s from "./TodoItem.module.css"

const TodoListItem = ({todo, onRemoveTodo, id, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
        <div className={s.todoCardWrapper}>
            <li>
                <div className={s.titleAndButtonWrapper}>
                <h2 className={s.todoTitle}>{todo}</h2>
                <Button callback={callbackHandler}>x</Button>
                </div>
                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask} onAddTask={onAddTask} changeTaskStatus={changeTaskStatus}/>
            </li>
        </div>
    )
};

export default TodoListItem;