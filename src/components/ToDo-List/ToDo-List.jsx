import { useEffect, useState } from 'react'

import ToDoItem from '../ToDo-Item/ToDo-Item';

import './style.css';

const ToDoList = (props) => {
    return <div style={{ }}>
        {props.items && props.items.map((item, index) => <ToDoItem 
                key={item.id}
                item={item}>
        </ToDoItem>) }
    </div>
}

export default ToDoList;