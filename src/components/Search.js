import React from 'react';
import ReusableInput from "./ReusableInput";

const Search = () => {
    return (
        <div>
            <ReusableInput onChange={()=>{}} placeholder={"Search by to do title..."} maxLengthValue={"30"}/>
        </div>
    );
};

export default Search;