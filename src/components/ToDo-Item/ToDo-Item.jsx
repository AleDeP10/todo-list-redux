import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import { toggleDone } from '../../redux/item';

import './style.css';

const ToDoItem = (props) => {
    {console.log({props, item: props.item, done: props.item.done})}
    const dispatch = useDispatch();

    const handleClick = () => {
        const { item } = props;
        dispatch(toggleDone(item.text, item.done));
    }

    return <div 
            className={props.item.done?'done':'todo'}
            onClick={handleClick}>
        {props.item.text}
    </div>
}

export default ToDoItem;