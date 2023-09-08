import React, {useState, memo} from 'react';

export const EditableSpan = memo((props) => {
    const {title, callback} = props;

    const [edit, setEdit] = useState(false)
    let [label, setLabel] = useState(title)

    const onDoubleClickHandler = () =>{
        setEdit(!edit)
        callback(label)
    }
    const onChangeHandler = (e) => {
        setLabel(e.currentTarget.value)
    }
    const onKeyPressHandler = (e) => {
        /*setError(null);*/
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
