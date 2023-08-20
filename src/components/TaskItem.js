import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id, status, changeTaskStatus}) => {
    const deleteTaskHandler = () => {
        onRemoveTask(id)
    }

    const changeTaskStatusHandler = (e) => {
        const newStatus = e.target.checked
        changeTaskStatus(newStatus, id)
    }

    return (
            <li>
                <input type="checkbox" checked={status} onChange={changeTaskStatusHandler}/>
                {task}
                <Button callback={deleteTaskHandler}>x</Button>
            </li>
    )
};

export default TaskItem;