import './App.css';
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {useEffect, useState} from "react";
import IsLoading from "./components/IsLoading";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`
            }
        }
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\\`
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            const todos = data.records.map((todo) => {
                const newTodo = {
                    id: todo.id,
                    title: todo.fields.title,
                    createdAt: todo.fields.createdAt
                }

                return newTodo

            });

            setTodoList(todos);


        } catch (error) {
            console.log(error.message)
        }
    }
    const postTodo = async (todo) => {
        try {
            const airtableData = {
                fields: {
                    title: todo
                }
            }

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_TOKEN}`,
                    },
                    body: JSON.stringify(airtableData),
                }
            );

            if (!response.ok) {
                throw new Error(`Error has ocurred: ${response.status}`);
            }

            const dataResponse = await response.json();
            return dataResponse

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }

    useEffect(() => {
        fetchData()
            .then(r => setIsLoading(false));
    }, [])

    const addTodo = (newTodo) => {
        postTodo(newTodo.title);
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

export default App;
