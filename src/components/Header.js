import React, {useEffect} from 'react';
import {Link, useLocation} from "react-router-dom";
import s from "./Header.module.css";
import c from "../App.module.css";
import logo from "../assets/images/ctd_logo.svg"
import home from "../assets/images/home_icon.svg"

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/home") {
            document.getElementById("app").style.backgroundColor = "#FFFFFF";
            document.getElementById("app").style.justifyContent = "center";
        }
    }, [location.pathname]);

    return (
        <div className={s.header}>
            <div className={c.container}>
                <div className={s.headerWrap}>
            <img className={s.logo} src={logo}/>
            <Link to={"/home"}><img className={s.homeIcon} src={home}/></Link>
            </div>
            </div>
        </div>
    );
};

export default Header;