import React from 'react';
import ReusableInput from "./ReusableInput";
import s from "./Search.module.css"
import PropTypes from "prop-types";

const Search = ({onSearch}) => {
    const handleInputChange = (event) => {
        onSearch(event.target.value);
    }
    return (
        <div className={s.searchWrapper}>
            <ReusableInput onChange={handleInputChange} placeholder={"Search by to do title..."} maxLengthValue={"30"}/>
        </div>
    );
};

Search.propTypes = {
    onSearch: PropTypes.func
};

export default Search;