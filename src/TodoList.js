import React from 'react';

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
            {todoList.map(t => (
                <li key={t.id}>{t.title}</li>
            ))
            }
        </ul>
    </>
};

export default TodoList;