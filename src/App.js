import s from './App.module.css';
import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoContainer from "./components/TodoContainer";
import HomePage from "./components/HomePage";
import ErrorPage from "./components/ErrorPage";

export const PATH = {
    TODO_APP: '/todo-app',
    HOME: '/home',
}

const App = () => {
    return <BrowserRouter>
        <Header/>
        <div id="app" className={s.wrap}>
        <Routes>
            <Route path={'/'} element={<Navigate to={PATH.HOME}/>}/>
            <Route path={PATH.TODO_APP} element={<TodoContainer/>}/>
            <Route path={PATH.HOME} element={<HomePage/>}/>
            <Route path="/*" element={<ErrorPage/>}/>
        </Routes>
        </div>
        <Footer/>
    </BrowserRouter>
}

export default App;
