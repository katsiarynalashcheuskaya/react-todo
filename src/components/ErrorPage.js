import React from 'react';
import c from "../App.module.css";
import s from "./ErrorPage.module.css";
import error from "../assets/images/error1.jpg"

const ErrorPage = () => {
    return (
        <div className={`${s.ErrorPageWrapper} ${c.container}`}>
            <img src={error}/>
            <div>
            <h2>There's nothing here.</h2>
            <p>Not all who wander are lost. But you certainly are.</p>
            </div>
        </div>
    );
};

export default ErrorPage;