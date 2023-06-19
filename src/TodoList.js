import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList}) => {
    return (
        <ul>
            {todoList.map(t => <TodoListItem key={t.id} todo={t.title}/>)
            }
        </ul>
    )
};

export default TodoList;