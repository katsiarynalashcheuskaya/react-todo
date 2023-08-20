import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id, status, changeTaskStatus}) => {
    const deleteTaskHandler = () => {
        onRemoveTask(id)
    }

    const changeTaskStatusHandler = (e) => {
        changeTaskStatus(e.target.checked, id)
    }

    return (
            <li>
                <input type="checkbox" checked={status ? status : ''} onChange={changeTaskStatusHandler}/>
                {task}
                <Button callback={deleteTaskHandler}>x</Button>
            </li>
    )
};

export default TaskItem;