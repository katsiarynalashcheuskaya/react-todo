import React from 'react';
import Button from "../button";

const TaskItem = ({task, onRemoveTask, id}) => {
    const callbackHandler = () => {
        onRemoveTask(id)
    }
    return (
            <li>
                <input type="checkbox"/>
                {task}
                <Button callback={callbackHandler}>x</Button>
            </li>
    )
};

export default TaskItem;