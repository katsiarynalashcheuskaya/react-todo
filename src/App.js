import './App.css';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useEffect, useState} from "react";

function App() {
    const [todoList, setTodoList] = useSemiPersistentState('savedTodoList', [])
    const addTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList]);
    }

    return <>
            <h1>Todo List</h1>
            <AddTodoForm onAddTodo={addTodo}/>
            <TodoList todoList={todoList}/>
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
