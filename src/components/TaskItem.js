import React from 'react';
import Button from "../Button";
import deleteIcon from "../assets/images/delete-icon.svg"
import s from "./TaskItem.module.css"

const TaskItem = ({task, onRemoveTask, id, status, changeTaskStatus}) => {
    const deleteTaskHandler = () => {
        onRemoveTask(id)
    }

    const changeTaskStatusHandler = (e) => {
        changeTaskStatus(e.target.checked, id)
    }

    return (
            <li className={s.taskWrapper}>
                <input type="checkbox" checked={status ? status : ''} onChange={changeTaskStatusHandler}/>
                <div className={s.taskTitle}>{task}</div>
                <Button callback={deleteTaskHandler}><img src={deleteIcon}/></Button>
            </li>
    )
};

export default TaskItem;