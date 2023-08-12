import React from 'react';
import TaskItem from "./TaskItem";

const Task = ({tasks, onRemoveTask, id}) => {
    let tasksForTodolist  = tasks.filter(t => {
        console.log(t.todoID)
        console.log(id)
    });
    return (
        <ul>
            {tasks.map(t => <TaskItem key={t.id} taskID={t.id} task={t.title} onRemoveTask={onRemoveTask}/>)
            }
        </ul>
    )
};

export default Task;