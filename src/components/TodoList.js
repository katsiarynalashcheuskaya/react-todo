import React from 'react';
import TodoListItem from "./TodoListItem";
import c from "../App.module.css";

const TodoList = ({todoList, onRemoveTodo, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    return (
        <ul>
            {todoList.map(t => {
                return <TodoListItem key={t.id} id={t.id} todo={t.title}
                                     tasks={tasks} onRemoveTodo={onRemoveTodo} onRemoveTask={onRemoveTask}
                                     onAddTask={onAddTask} changeTaskStatus={changeTaskStatus}/>
            })
            }
        </ul>
    )
};

export default TodoList;