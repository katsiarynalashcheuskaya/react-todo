import React from 'react';

const Footer = () => {
    const today = new Date();
    const thisYear = today.getFullYear();
    return (
        <ul>
            <li>
                <a
                    href="https://github.com/katsiarynalashcheuskaya"
                    target="_blank"
                    rel="noreferrer"
                    className={''}
                >
                    GitHub
                </a>
            </li>
            <li>© Katsiaryna Lashcheuskaya {thisYear}</li>
            <li>
                <a
                    href="https://www.linkedin.com/in/katsiaryna-lashcheuskaya-271210264/"
                    target="_blank"
                    rel="noreferrer"
                    className={''}
                >
                    LinkedIn
                </a>
                </li>
        </ul>
    );
};

export default Footer;