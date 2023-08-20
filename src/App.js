import './App.css';
import TodoList from "./components/TodoList";
import AddItemForm from "./components/AddItemForm";
import {useEffect, useState} from "react";
import IsLoading from "./components/IsLoading";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Button from "./button";
import Header from "./components/Header";
import Footer from "./components/Footer";

const PATH = {
    TODO_APP: '/todo-app',
    HOME: '/home',
}

const App = () => {
    const [todoList, setTodoList] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getTodo = async () => {
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
    const deleteItem = async (id) => {
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
    const getTasks = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        }
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks/`
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            const tasks = data.records.map((task) => {
                return {
                    taskID: task.id,
                    todoID: task.fields.todo[0],
                    title: task.fields.taskTitle,
                    status: task.fields.status
                }
            });

            setTasks(tasks);

        } catch (error) {
            console.log(error.message)
        }
    }
    const postTask = async (title, id) => {
        try {
            const airtableData = {
                fields: {
                    taskTitle: title,
                    todo: [id],
                }
            }

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks/`,
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
            console.log(data)
            const newTask = {
                todoID: data.fields.todo[0],
                taskID: data.id,
                title: data.fields.taskTitle
            }

            setTasks([newTask, ...tasks]);

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    const updateTask = async (status, id) => {
        try {
            const airtableData = {
                fields: {
                    status: status
                }
            }

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Tasks/${id}`,
                {
                    method: "PATCH",
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
            console.log(data)
            const newTasks = tasks.map((task) => {
            if (task.id === id) {
                const newFields = task
                    ? { ...task.fields, status: status }
                    : { ...task.fields, status: null };
                return { taskID: task.id, fields: newFields };
            } else {
                return task;
            }
        });
        setTasks(newTasks)

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    /*const updateTask = async (status, id) => {
    const tableName = 'Task';
        const newTasks = tasks.map((task) => {
            if (task.id === id) {
                const newFields = task
                    ? { ...task.fields, status: status }
                    : { ...task.fields, status: null };
                updateAirtableRecord(task.id, newFields, tableName);
                return { taskID: task.id, fields: newFields };
            } else {
                return task;
            }
        });
        setTasks(newTasks)
    }*/

    /*const updateAirtableRecord = async (id, airtableData) => {
        if (typeof airtableData !== 'object') {
            console.error('Error: Must be an object')
            return
        }

        await fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Table/${id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                },
                body: JSON.stringify(airtableData),
            }
        )

            .then((response) => response.json())
            .then((result) => {
                return result;
            })
            .catch((error) => {
                console.error('Error:', error);
                throw error;
            });
    }
*/

    useEffect(() => {
        getTodo()
            .then(r => {
                setIsLoading(false)
            });
        getTasks();
    }, [])

    const addTodo = (title) => {
        postTodo(title);
    }
    const removeTodo = (id) => {
        deleteItem(id);
        const newTodolist = todoList.filter(el => el.id !== id);
        setTodoList(newTodolist);
        const newTasks = tasks.map(el => {
            return (
            el.todoID === id ? deleteItem(el.taskID) : el)
        } )
        setTasks(newTasks);
    }
    const addTask = (title, id) => {
        postTask(title, id);

    }
    const removeTask = (id) => {
        deleteItem(id)
        const newTasks = tasks.filter(el => el.taskID !== id);
        setTasks(newTasks);
    }
    const changeTaskStatus = (status, id) => {
       updateTask(status, id)
       /* const newStatus = status? status : false
        const newTasks = tasks.map(t=>t.taskID === id ? {...t, status: newStatus} : t)
        console.log(newTasks)
        setTasks(newTasks)*/
    }

    return <BrowserRouter>
        <Header/>
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
            <Route path={PATH.TODO_APP} element={<>
                <AddItemForm callback={addTodo} placeholder={'New todo...'}/>
                {isLoading && <IsLoading/>}
                <TodoList todoList={todoList} tasks={tasks}
                          onRemoveTodo={removeTodo} onRemoveTask={removeTask}
                          onAddTask={addTask} changeTaskStatus={changeTaskStatus}/>
            </>}
            />
            <Route path={PATH.HOME} element={<>
                <h1>Todo App</h1>
                <Link to={PATH.TODO_APP}><Button>Let's start</Button></Link>
            </>
            }
            />
            <Route path="/*" element={<>Error 404</>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
}

export default App;
