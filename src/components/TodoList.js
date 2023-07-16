import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList, onRemoveTodo}) => {
    return (
        <ul>
            {todoList.map(t => <TodoListItem key={t.id} id={t.id} todo={t.title} onRemoveTodo={onRemoveTodo}/>)
            }
        </ul>
    )
};

export default TodoList;