import React, {useEffect} from 'react';
import TodoListItem from "./TodoListItem";
import s from "./TodoList.module.css"
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemoveTodo, tasks, onRemoveTask, onAddTask, changeTaskStatus}) => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/todo-app") {
            document.getElementById("app").style.backgroundColor = "#F5F5F5FF";
            document.getElementById("app").style.justifyContent = "initial";
        }
    }, [location.pathname]);
    return (
        <ul className={s.todoCardsWrapper}>
            {todoList.map(t => {
                return <TodoListItem key={t.id} id={t.id} todo={t.title} date={t.createdDate}
                                     tasks={tasks} onRemoveTodo={onRemoveTodo} onRemoveTask={onRemoveTask}
                                     onAddTask={onAddTask} changeTaskStatus={changeTaskStatus}/>
            })
            }
        </ul>
    )
};

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func,
    tasks: PropTypes.array,
    onRemoveTask: PropTypes.func,
    onAddTask: PropTypes.func,
    changeTaskStatus: PropTypes.func
}

export default TodoList;