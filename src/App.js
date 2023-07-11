import './App.css';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useEffect, useState} from "react";

function App() {
    const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', [])
    const addTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList]);
    }
    const removeTodo = (id) => {
        const newTodolist = todoList.filter(el => el.id !== id);
        setTodoList(newTodolist);
    }

    return <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
}

function useSemiPersistentState(key, initialState) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialState)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export default App;
