import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id, status, onStatusChange}) => {
    const deleteTaskHandler = () => {
        onRemoveTask(id)
    }

    const changeTaskStatusHandler = (e) => {
        onStatusChange(e.currentTarget.value, id)
    }

    return (
            <li>
                <input type="checkbox" checked={status} value={status} onChange={changeTaskStatusHandler}/>
                {task}
                <Button callback={deleteTaskHandler}>x</Button>
            </li>
    )
};

export default TaskItem;