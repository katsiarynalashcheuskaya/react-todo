import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id, status}) => {
    const deleteTaskHandler = () => {
        onRemoveTask(id)
    }
    const changeTaskStatusHandler = (task) => {
        //onStatusChange(task.status, task.taskID)
    }
    return (
            <li>
                <input type="checkbox" value={status}/>
                {task}
                <Button callback={deleteTaskHandler}>x</Button>
            </li>
    )
};

export default TaskItem;