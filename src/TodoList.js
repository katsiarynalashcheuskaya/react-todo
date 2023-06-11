import React from 'react';
import TodoListItem from "./TodoListItem";

const todoList = [
    {
        id: 1,
        title: 'React'
    },
    {
        id: 2,
        title: 'HTML&CSS'
    },
    {
        id: 3,
        title: 'Redux'
    }
]

const TodoList = () => {
    return <>
        <ul>
            {todoList.map(t => <TodoListItem key={t.id} todo={t.title}/>)
            }
        </ul>
    </>
};

export default TodoList;