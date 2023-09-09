import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import c from "../App.module.css";
import s from "./TodoContainer.module.css";
import AddItemForm from "./AddItemForm";
import IsLoading from "./IsLoading";
import TodoList from "./TodoList";
import Sort from "./Sort";
import Search from "./Search";

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState(localStorage.getItem("sortDirection"));
    const [searchInput, setSearchInput] = useState("");

    /*Sort with JavaScript*/
    const onSortByTitleAsc = () => {
        function sortData(a, b) {
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return 1;
            }
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1;
            }
            return 0;
        }

        setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    const onSortByTitleDes = () => {
        function sortData(a, b) {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return 1;
            }
            if (a.title.toLowerCase() > b.title.toLowerCase()) {
                return -1;
            }
            return 0;
        }

        setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    const onSortByDateAsc = () => {
        function sortData(a, b) {
            return new Date(b.createdTime) - new Date(a.createdTime);
        }

        setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    const onSortByDateDesc = () => {
        function sortData(a, b) {
            return new Date(a.createdTime) - new Date(b.createdTime);
        }

        setTodoList((oldTodoList) => [...oldTodoList].sort(sortData));
    };
    const sortList = (sortDirection) => {
        switch (sortDirection) {
            case "titleAsc":
                onSortByTitleAsc();
                break;
            case "titleDesc":
                onSortByTitleDes();
                break;
            case "createdDateAsc":
                onSortByDateAsc();
                break;
            case "createdDateDesc":
                onSortByDateDesc();
                break;
            default:
                onSortByDateAsc();
        }
        setSortDirection(sortDirection);
    };


    const getTodo = async () => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`
            }
        }
        const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}`
        try {
            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();

            const todos = data.records.map((todo) => {
                return {
                    id: todo.id,
                    title: todo.fields.title,
                    createdTime: todo.createdTime
                }
            });

            setTodoList(todos);
            sortList(sortDirection);


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
                title: data.fields.title,
                createdTime: data.createdTime
            }

            setTodoList([newTodo, ...todoList]);

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    const editTodoTitle = async (newTitle, id) => {
        try {
            const airtableData = {
                fields: {
                    title: newTitle
                }
            }

            const response = await fetch(
                `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${process.env.REACT_APP_TABLE_NAME}/${id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    },
                    body: JSON.stringify(airtableData),
                }
            )

            if (!response.ok) {
                throw new Error(`Error has ocurred: ${response.status}`);
            }

            const data = await response.json();
            return data ? {...data.fields, title: data.fields.title} : {...data.fields, title: "Empty title"}

        } catch (error) {
            console.log(error.message)
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
            const newTask = {
                todoID: data.fields.todo[0],
                taskID: data.id,
                title: data.fields.taskTitle,
                status: null
            }

            setTasks([newTask, ...tasks]);

        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    const updateTaskStatus = async (status, id) => {
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

            return data ? {...data.fields, status: data.fields.status} : {...data.fields, status: null}


        } catch (error) {
            console.log(error.message);
            return null;
        }
    }
    const editTaskTitle = async (newTitle, id) => {
        try {
            const airtableData = {
                fields: {
                    taskTitle: newTitle
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
            )

            if (!response.ok) {
                throw new Error(`Error has ocurred: ${response.status}`);
            }

            const data = await response.json();
            console.log(data)
            return data ? {...data.fields, taskTitle: data.fields.taskTitle} : {...data.fields, taskTitle: "Empty title"}

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodo()
            .then(r => {
                setIsLoading(false)
            });
        getTasks();
    }, [sortDirection])

    const addTodo = (title) => {
        console.log("addTodo")
        postTodo(title);
    };
    const removeTodo = (id) => {
        console.log("removeTodo")
        deleteItem(id);
        const newTodolist = todoList.filter(el => el.id !== id);
        setTodoList(newTodolist);
        const newTasks = tasks.map(el => {
            return (
                el.todoID === id ? deleteItem(el.taskID) : el)
        })
        setTasks(newTasks);
    };
    const changeTodoTitle = (newTitle, id) => {
        editTodoTitle(newTitle, id)
        const newTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                return {id: todo.id, ...todo, title: newTitle};
            } else {
                return todo;
            }
        });

        setTodoList(newTodoList)
    };

    const addTask = (title, id) => {
        console.log("addTask")
        postTask(title, id);
    }
    const removeTask = (id) => {
        console.log("removeTask")
        deleteItem(id)
        const newTasks = tasks.filter(el => el.taskID !== id);
        setTasks(newTasks);
    }
    const changeTaskStatus = (status, id) => {
        updateTaskStatus(status, id);
        const newTasks = tasks.map((task) => {
            if (task.taskID === id) {
                return {taskID: task.taskID, ...task, status: status};
            } else {
                return task;
            }
        });

        setTasks(newTasks);
    }
    const changeTaskTitle = (newTitle, id) => {
        editTaskTitle(newTitle, id)
        const newTasks = tasks.map((task) => {
            if (task.taskID === id) {
                return {taskID: task.taskID, ...task, title: newTitle};
            } else {
                return task;
            }
        });

        setTasks(newTasks)
    };

    /*Searching*/
    const handleSearch = (inputValue) => {
        setSearchInput(inputValue);
    };
    const filterListTitles = useCallback((todoList, searchInput) => {
        return todoList.filter(
            (todo) =>
                todo.title &&
                todo.title.toLowerCase().includes(searchInput.toLowerCase())
        );
    }, [searchInput])

    return (
        <div className={`${s.todoWrapper} ${c.container}`}>
            <Search onSearch={handleSearch}/>
            <AddItemForm callback={addTodo} placeholder={'New todo...'} buttonTitle={"+"} maxLengthValue={"14"}/>
            <Sort sortData={sortList} sortDirection={sortDirection} todoList={todoList}/>
            {isLoading && <IsLoading/>}
            {todoList.length === 0 && !isLoading && (
                <p>You don't have any todo lists yet.</p>
            )}
            {todoList.length > 0 && (
                <TodoList todoList={filterListTitles(todoList, searchInput)} tasks={tasks}
                          onRemoveTodo={removeTodo} onRemoveTask={removeTask}
                          onAddTask={addTask} changeTaskStatus={changeTaskStatus} changeTodoTitle={changeTodoTitle}
                          changeTaskTitle={changeTaskTitle}/>
            )}
        </div>
    );
};

export default TodoContainer;