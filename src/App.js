import './App.css';
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState} from "react";
import {logDOM} from "@testing-library/react";

function App() {
    const [todoList, setTodoList] = useState([])
    const addTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList]);
    }
    return <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        <TodoList todoList={todoList}/>
    </>
}


export default App;
