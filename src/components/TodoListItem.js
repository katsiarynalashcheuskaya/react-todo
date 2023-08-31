import React from 'react';
import Button from "../Button";
import Task from "./Task";
import s from "./TodoListItem.module.css"
import deleteIcon from "../assets/images/delete-icon.svg";
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo, id, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    const callbackHandler = () => {
        onRemoveTodo(id)
    }
    return (
        <div className={s.todoCardWrapper}>
            <li>
                <div className={s.titleAndButtonWrapper}>
                <h2 className={s.todoTitle}>{todo}</h2>
                <Button callback={callbackHandler}><img src={deleteIcon}/></Button>
                </div>
                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask} onAddTask={onAddTask} changeTaskStatus={changeTaskStatus}/>
            </li>
            {/*<div className={s.filterWrapper}>
            <div>All</div>
            <div>Active</div>
            <div>Done</div>
            </div>*/}
        </div>
    )
};

TodoListItem.propTypes = {
    todo: PropTypes.string,
    onRemoveTodo: PropTypes.func,
    id: PropTypes.string,
    tasks: PropTypes.array,
    onRemoveTask: PropTypes.func,
    onAddTask: PropTypes.func,
    changeTaskStatus: PropTypes.func
}

export default TodoListItem;