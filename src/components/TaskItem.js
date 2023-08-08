import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, taskID, todoID}) => {
    const callbackHandler = () => {
        onRemoveTask(id)
    }
    return (
        <div>
            <li>
                {task}
                <Button callback={callbackHandler}>X</Button>
            </li>

        </div>
    )
};

export default TaskItem;