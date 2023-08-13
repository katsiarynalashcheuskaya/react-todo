import React from 'react';
import Button from "../button";
import Task from "./Task";
import AddItemForm from "./AddTodoForm";

const TodoListItem = ({todo, onRemoveTodo, id, tasks, onRemoveTask, onAddTask}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
            <li>
                {todo}
                <Button callback={callbackHandler}>X</Button>
                <AddItemForm callback={onAddTask} placeholder={'New task...'}/>
                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask}/>
            </li>
    )
};

export default TodoListItem;