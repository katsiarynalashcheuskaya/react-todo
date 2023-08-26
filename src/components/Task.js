import React from 'react';
import TaskItem from "./TaskItem";
import AddItemForm from "./AddItemForm";

const Task = ({tasks, onRemoveTask, id, onAddTask, changeTaskStatus}) => {
    let tasksForTodolist  = tasks.filter(t => t.todoID === id);
    return (
        <ul>
            <AddItemForm callback={onAddTask} id={id} placeholder={'New task...'} buttonTitle={"+"}/>
            {tasksForTodolist.map(t => <TaskItem key={t.taskID} id={t.taskID} task={t.title} status={t.status}
                                                 onRemoveTask={onRemoveTask} changeTaskStatus={changeTaskStatus}/>)}
        </ul>
    )
};

export default Task;