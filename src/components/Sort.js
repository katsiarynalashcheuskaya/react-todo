import React from 'react';
import Button from "../Button";
import s from "./Sort.module.css"

const Sort = ({ sortData,  sortDirection}) => {
    return (
        <div className={s.sortingWrapper}>
            <Button
                active={sortDirection === "titleAsc"}
                type="button"
                title="sort by todo title ascending order"
                callback={() => {
                    sortData("titleAsc");
                    localStorage.setItem("sortDirection", "titleAsc");
                }}
            >
                Sort by title (A-Z)
            </Button>
            <Button
                active={sortDirection === "titleDesc"}
                type="button"
                title="sort by todo title descending order"
                callback={() => {
                    sortData("titleDesc");
                    localStorage.setItem("sortDirection", "titleDesc");
                }}
            >
                Sort by title (Z-A)
            </Button>
            <Button
                active={sortDirection === "createdDateAsc"}
                type="button"
                title="sort by date ascending order"
                callback={() => {
                    sortData("createdDateAsc");
                    localStorage.setItem("sortDirection", "createdDateAsc");
                }}
            >
                Sort by date(asc)
            </Button>
            <Button
                active={sortDirection === "createdDateDesc"}
                type="button"
                title="sort by date descending order"
                callback={() => {
                    sortData("createdDateDesc");
                    localStorage.setItem("sortDirection", "createdDateDesc");
                }}
            >
                Sort by date(desc)
            </Button>
        </div>
    );
};

export default Sort;