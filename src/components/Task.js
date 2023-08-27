import React from 'react';
import TaskItem from "./TaskItem";
import AddItemForm from "./AddItemForm";
import s from "./Task.module.css"

const Task = ({tasks, onRemoveTask, id, onAddTask, changeTaskStatus}) => {
    let tasksForTodolist  = tasks.filter(t => t.todoID === id);
    return (
        <ul>
            <AddItemForm callback={onAddTask} id={id} placeholder={'New task...'} buttonTitle={"+"} inputClass={s.inputClass}/>
            {tasksForTodolist.length === 0 && (
                    <p>You don't have any tasks yet.</p>
            )}
            {tasksForTodolist.length > 0 && (
            <div className={s.tasksList}>
            {tasksForTodolist.map(t => <TaskItem key={t.taskID} id={t.taskID} task={t.title} status={t.status}
                                                 onRemoveTask={onRemoveTask} changeTaskStatus={changeTaskStatus}/>)}
            </div>
                )}
            </ul>

    )
};

export default Task;