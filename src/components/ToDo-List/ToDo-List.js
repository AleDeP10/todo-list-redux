import { useEffect, useState } from 'react'

import ToDoItem from '../ToDo-Item/ToDo-Item';

import './style.css';

const ToDoList = (props) => {
    {console.log({props, exists: props.items})}
    return <div style={{ }}>
        {props.items && props.items.map((item, index) => <>b<ToDoItem 
                key={index}
                item={item}>
        </ToDoItem>b</>) }
    </div>
}

export default ToDoList;