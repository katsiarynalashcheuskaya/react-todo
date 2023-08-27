import React from 'react';
import TodoListItem from "./TodoListItem";
import s from "./TodoList.module.css"

const TodoList = ({todoList, onRemoveTodo, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    return (
        <ul className={s.todoCardsWrapper}>
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