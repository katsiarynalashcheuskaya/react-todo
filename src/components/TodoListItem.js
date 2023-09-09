import React, {useCallback} from 'react';
import Button from "./Button";
import Task from "./Task";
import s from "./TodoListItem.module.css"
import deleteIcon from "../assets/images/delete-icon.svg";
import PropTypes from "prop-types";
import {EditableSpan} from "./EditableSpan";

const TodoListItem = ({todo, onRemoveTodo, id, date, tasks, onRemoveTask, onAddTask, changeTaskStatus, changeTaskTitle, changeTodoTitle}) => {
    let createdDate = new Date(date)
    let year = createdDate.getFullYear();
    let month = createdDate.getMonth()+1;
    let dt = createdDate.getDate();
    if (dt < 10) {
        dt = '0' + dt;
    }
    if (month < 10) {
        month = '0' + month;
    }

    const callbackHandler = () => {
        onRemoveTodo(id)
    }

    const editTodolistHandler = (newTitle) => changeTodoTitle(newTitle, id);

    return (
        <div className={s.todoCardWrapper}>
            <li>
                <div className={s.titleAndDateWrapper}>
                    <div className={s.titleAndButtonWrapper}>
                    <EditableSpan title={todo} callback={editTodolistHandler}/>
                        <Button callback={callbackHandler}><img src={deleteIcon}/></Button>
                    </div>
                    <div className={s.date}>created {`${month}.${dt}.${year}`}</div>
                </div>

                <Task tasks={tasks} id={id} onRemoveTask={onRemoveTask} onAddTask={onAddTask}
                      changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle}/>
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