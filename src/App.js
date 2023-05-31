import './App.css';

const todoList = [
    {
        id: 1,
        title: 'React'
    },
    {
        id: 2,
        title: 'HTML&CSS'
    },
    {
        id: 3,
        title: 'Redux'
    }
]

function App() {
    return <>
        <h1>Todo List</h1>
        {todoList.map(t => (
            <ul key={t.id}>
                <li>{t.title}</li>
            </ul>
        ))
        }
    </>
}

export default App;
