import React from 'react';
import ReusableInput from "./ReusableInput";
import s from "./Search.module.css"

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

export default Search;