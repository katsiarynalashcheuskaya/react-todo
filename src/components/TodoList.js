import React from 'react';
import TodoListItem from "./TodoListItem";

const TodoList = ({todoList, onRemoveTodo, tasks, onRemoveTask, onAddTask}) => {
    return (
        <ul>
            {todoList.map(t => {
                return <TodoListItem key={t.id} id={t.id} todo={t.title}
                                     tasks={tasks} onRemoveTodo={onRemoveTodo} onRemoveTask={onRemoveTask}
                                     onAddTask={onAddTask}/>
            })
            }
        </ul>
    )
};

export default TodoList;