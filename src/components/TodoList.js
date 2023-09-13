import React, {useEffect} from 'react';
import TodoListItem from "./TodoListItem";
import s from "./TodoList.module.css"
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";


const TodoList = ({todoList, onRemoveTodo, tasks, onRemoveTask, onAddTask, changeTaskStatus, changeTodoTitle, changeTaskTitle, changeFilter}) => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/todo-app") {
            document.getElementById("app").style.backgroundColor = "#F5F5F5FF";
            document.getElementById("app").style.justifyContent = "initial";
            document.getElementById("homeIcon").style.display = "block";
        }
    }, [location.pathname]);
    return (
        <ul className={s.todoCardsWrapper}>
            {todoList.map(todo => {
                let tasksForTodolist = tasks
                if (todo.filterValue === "Active") {
                    tasksForTodolist = tasksForTodolist.filter(t => !t.status)
                }
                if (todo.filterValue === "Completed") {
                    tasksForTodolist = tasksForTodolist.filter(t => t.status);
                }
                return <TodoListItem key={todo.id} id={todo.id} todo={todo.title} date={todo.createdTime} filter={todo.filterValue}
                                     tasks={tasksForTodolist} onRemoveTodo={onRemoveTodo} onRemoveTask={onRemoveTask}
                                     onAddTask={onAddTask} changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} changeTodoTitle={changeTodoTitle} changeFilter={changeFilter}/>
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
    changeTaskStatus: PropTypes.func,
    changeTodoTitle: PropTypes.func,
    changeTaskTitle: PropTypes.func,
    changeFilter: PropTypes.func
}

export default TodoList;