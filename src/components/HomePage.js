import React from 'react';
import c from "../App.module.css";
import s from "./HomePage.module.css";
import main from "../assets/images/main.jpg";
import {Link} from "react-router-dom";
import start from "../assets/images/start_button.svg";
import {PATH} from "../App";

const HomePage = () => {
    return (
        <div className={`${s.homePageWrapper} ${c.container}`}>
            <img className={s.mainImage} src={main}/>
            <div className={s.titleAndButtonWrapper}>
                <h1>To Do List App</h1>
                <Link to={PATH.TODO_APP}><img className={s.startButton} src={start}/></Link>
            </div>
        </div>
    );
};

export default HomePage;