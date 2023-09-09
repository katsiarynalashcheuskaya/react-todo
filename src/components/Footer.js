import React from 'react';
import s from "./Footer.module.css"
import c from "../App.module.css"
import github from "../assets/images/github_icon.svg"
import linkedIn from "../assets/images/linkedin_icon.png"

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();
    return (
        <div className={s.footer}>
        <ul className={c.container}>
            <li>
                <a
                    href="https://github.com/katsiarynalashcheuskaya"
                    target="_blank"
                    className={''}
                >
                    <img src={github}/>
                    <span>GitHub</span>
                </a>
            </li>
            <li><span className={s.nameSpan}>© Katsiaryna Lashcheuskaya {thisYear}</span></li>
            <li>
                <a
                    href="https://www.linkedin.com/in/katsiaryna-lashcheuskaya-271210264/"
                    target="_blank"
                    rel="noreferrer"
                    className={''}
                >
                    <img src={linkedIn}/>
                    <span>LinkedIn</span>
                </a>
                </li>
        </ul>
            </div>
    );
};

export default Footer;