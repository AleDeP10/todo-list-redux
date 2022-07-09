import { useEffect, useState } from 'react'

import './style.css';

const ToDoItem = (props) => {
    {console.log({props, exists: props.item, done: props.item.done})}
    return <div className={props.item.done?'done':'todo'}>
        {props.item.text}
    </div>
}

export default ToDoItem;