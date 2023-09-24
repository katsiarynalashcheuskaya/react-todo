import React from 'react';
import s from "./Sort.module.css"
import PropTypes from "prop-types";

const Sort = ({sortData, sortDirection, todoList}) => {
    let selectCheck = document.getElementById("sorting");
    if (selectCheck) {
        selectCheck.value = sortDirection
    }
    const setSortValue = (el) => {
        sortData(el);
        localStorage.setItem("sortDirection", el);
    }
    return (
        <select id="sorting" className={s.sortingWrapper} disabled={todoList.length === 0} onChange={(e) => {
            setSortValue(e.target.value);
        }}>
            <option value="titleAsc"> Sort by title (a-z)</option>
            <option value="titleDesc">Sort by title (z-a)</option>
            <option value="createdDateAsc">Sort by date (asc)</option>
            <option value="createdDateDesc">Sort by date (desc)</option>
        </select>
    );
};

Sort.propTypes = {
    sortData: PropTypes.func,
    sortDirection: PropTypes.string,
    todoList: PropTypes.array
};

export default Sort;