import React from 'react';



const TodoListItem = (props) => {
    return (
        <div>
            <li>{props.todo}</li>
        </div>
    );
};

export default TodoListItem;