import { Children, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { toggleDone } from '../../redux/item';

import './style.css';

const ToDoItem = (props) => {
    const dispatch = useDispatch();
    const { item } = props;

    const handleClick = (event) => {
        console.log("handleClick", { event, item });
        dispatch(toggleDone(item.id));
    }

    return <div 
            className={item.done?'done':'todo'}
            onClick={handleClick}>
        {item.text}
    </div>
}

export default ToDoItem;