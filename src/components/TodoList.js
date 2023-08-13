import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList, onRemoveTodo, tasks}) => {
    return (
        <ul>
            {todoList.map(t => {
                return <TodoListItem key={t.id} id={t.id} todo={t.title} tasks={tasks} onRemoveTodo={onRemoveTodo}/>
            })
            }
        </ul>
    )
};

export default TodoList;