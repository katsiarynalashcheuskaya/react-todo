import React from 'react';
import TaskItem from "./TaskItem";

const Task = ({tasks, onRemoveTask, id}) => {
    let tasksForTodolist  = tasks.filter(t => t.todoID === id
    );
    return (
        <ul>
            {tasksForTodolist.map(t => <TaskItem key={t.taskID} id={t.taskID} task={t.title} onRemoveTask={onRemoveTask}/>)
            }
        </ul>
    )
};

export default Task;