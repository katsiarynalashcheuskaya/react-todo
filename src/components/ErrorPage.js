import React, {useEffect} from 'react';
import c from "../App.module.css";
import s from "./ErrorPage.module.css";
import error from "../assets/images/error1.png"
import {PATH} from "../App";
import {Link} from "react-router-dom";
import home from "../assets/images/home_button.svg";

const ErrorPage = () => {
    return (
        <div className={`${s.errorPageWrapper} ${c.container}`}>
            <img src={error}/>
            <div className={s.error}>
                <h2>There's nothing here.</h2>
                <p>Not all who wander are lost. But you certainly are.</p>
                <Link to={PATH.HOME}><img className={s.homeButton} src={home}/></Link>
            </div>
        </div>
    );
};

export default ErrorPage;