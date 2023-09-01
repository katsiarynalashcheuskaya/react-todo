import React from 'react';
import Button from "../Button";
import deleteIcon from "../assets/images/delete-icon.svg"
import s from "./TaskItem.module.css"
import PropTypes from "prop-types";

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


TaskItem.propTypes = {
    id: PropTypes.string,
    task: PropTypes.string,
    status: PropTypes.bool,
    onRemoveTask: PropTypes.func,
    changeTaskStatus: PropTypes.func
}

export default TaskItem;