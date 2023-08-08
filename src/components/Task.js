import React from 'react';
import TaskItem from "./TaskItem";

const Task = ({tasks, onRemoveTask, todoID}) => {
    return (
        <ul>
            {tasks.map(t => <TaskItem key={t.id} taskID={t.id} task={t.title}  todoID={todoID} onRemoveTask={onRemoveTask}/>)
            }
        </ul>
    )
};

export default Task;