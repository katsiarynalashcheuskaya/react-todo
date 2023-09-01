import React from 'react';
import TaskItem from "./TaskItem";
import AddItemForm from "./AddItemForm";
import s from "./Task.module.css"
import PropTypes from "prop-types";

const Task = ({tasks, onRemoveTask, id, onAddTask, changeTaskStatus}) => {
    let tasksForTodolist  = tasks.filter(t => t.todoID === id);
    return (
        <ul className={s.tasksWrapper}>
            <AddItemForm callback={onAddTask} id={id} placeholder={'New task...'} buttonTitle={"+"} maxLengthValue={"40"}/>
            {tasksForTodolist.length === 0 && (
                <div className={s.emptyTasks}>
                    <p>You don't have any tasks yet.</p>
                </div>
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


Task.propTypes = {
    id: PropTypes.string,
    tasks: PropTypes.array,
    onRemoveTask: PropTypes.func,
    onAddTask: PropTypes.func,
    changeTaskStatus: PropTypes.func
}

export default Task;