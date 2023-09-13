import React, {useState, memo} from 'react';
import s from "./EditableSpan.module.css"
import PropTypes from "prop-types";

export const EditableSpan = memo((props) => {
    const {title, callback} = props;

    const [edit, setEdit] = useState(false)
    let [label, setLabel] = useState(title)


    const onDoubleClickHandler = () => {
        setEdit(!edit)
        label.trim() ? callback(label) : setLabel(title)
    }

    const onChangeHandler = (e) => {
        setLabel(e.currentTarget.value)
    }
    const onKeyPressHandler = (e) => {
        if (e.key === 'Escape') {
            setEdit(!edit)
            setLabel(title)
        }
        if (e.key === 'Enter') {
            onDoubleClickHandler();
        }
    }

    return (
        edit
            ? <input value={label}
                     onBlur={onDoubleClickHandler}
                     onChange={onChangeHandler}
                     onKeyDown={onKeyPressHandler}
                     autoFocus
            />
            : <span onDoubleClick={onDoubleClickHandler}>{title}</span>
    );
})

EditableSpan.propTypes = {
    callback: PropTypes.func,
    title: PropTypes.string
};
