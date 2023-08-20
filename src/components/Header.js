import React from 'react';
import Button from "../button";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <img src={'/'}/>
            <Link to={"/home"}><Button>Home</Button></Link>
        </div>
    );
};

export default Header;