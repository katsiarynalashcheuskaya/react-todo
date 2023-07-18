import React from 'react';
import Button from "../button";

const TodoListItem = ({todo, onRemoveTodo, id}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
        <div>
            <li>
                {todo}
                <Button callback={callbackHandler}>X</Button>
            </li>

        </div>
    )
};

export default TodoListItem;