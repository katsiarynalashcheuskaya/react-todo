import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id}) => {
    const callbackHandler = () => {
        onRemoveTask(id)
    }
    return (
        <div>
            <li>
                <input type="checkbox"/>
                {task}
                <Button callback={callbackHandler}>X</Button>
            </li>

        </div>
    )
};

export default TaskItem;