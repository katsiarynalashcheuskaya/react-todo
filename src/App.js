import './App.css';
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {useEffect, useState} from "react";
import IsLoading from "./components/IsLoading";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        new Promise((resolve, reject) =>
            setTimeout(() => resolve({data: {todoList: JSON.parse(localStorage.getItem('savedTodoList')) || []}}),
                2000))
            .then(result => {
                setTodoList(result.data.todoList);
                setIsLoading(false);
            });
    }, [])

    const addTodo = (newTodo) => {
        setTodoList([newTodo, ...todoList]);
    }
    const removeTodo = (id) => {
        const newTodolist = todoList.filter(el => el.id !== id);
        setTodoList(newTodolist);
    }

    useEffect(() => {
        if (!isLoading) {
            localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList])

    return <>
        <h1>Todo List</h1>
        <AddTodoForm onAddTodo={addTodo}/>
        {isLoading && <IsLoading/>}
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
}

/*function useSemiPersistentState(key, initialState) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialState)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}*/

export default App;
