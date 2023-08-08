import './App.css';
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import {useEffect, useState} from "react";
import IsLoading from "./components/IsLoading";

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
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
                return {
                    id: todo.id,
                    title: todo.fields.title
                }

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
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\\`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    },
                    body: JSON.stringify(airtableData),
                }
            );

            if (!response.ok) {
                throw new Error(`Error has ocurred: ${response.status}`);
            }

            const data = await response.json();
            const newTodo = {
                id: data.id,
                title: data.fields.title
            }

            setTodoList([newTodo, ...todoList])

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    const deleteTodo = async (id) => {
        try {
            const airtableData = {
                id: id
            }

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}\/${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    },
                    body: JSON.stringify(airtableData),
                }
            );

            if (!response.ok) {
                throw new Error(`Error has ocurred: ${response.status}`);
            }

            return await response.json()

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        fetchData()
            .then(r => {
                setIsLoading(false)
            });
    }, [])

    const addTodo = (title) => {
        postTodo(title);
    }
    const removeTodo = (id) => {
        deleteTodo(id)
        const newTodolist = todoList.filter(el => el.id !== id);
        setTodoList(newTodolist);
    }

    return <>
        <h1>Todo App</h1>
        <AddTodoForm callback={addTodo}/>
        {isLoading && <IsLoading/>}
        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
    </>
}

export default App;
