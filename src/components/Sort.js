import React from 'react';
import s from "./Sort.module.css"

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
            <option value="titleAsc"> Sort by title (A-Z)</option>
            <option value="titleDesc">Sort by title (Z-A)</option>
            <option value="createdDateAsc">Sort by date(asc)</option>
            <option value="createdDateDesc">Sort by date(desc)</option>
        </select>
    );
};

export default Sort;