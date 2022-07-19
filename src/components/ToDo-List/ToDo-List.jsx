import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoItem from '../ToDo-Item/ToDo-Item';

import { 
    getList, 
    setList
} from '../../utils/firebase';

import { setItems } from '../../redux/item';

import './style.css';

const ToDoList = () => {
    const dispatch = useDispatch();
    const userRef = useSelector(store => store.user.userRef);
    const items = useSelector(store => store.item.items);
    
    useEffect(() => {
        const getTodoList = async () => {
            const list = await getList(userRef);
            console.log({ list });
            dispatch(setItems(list.items));
        }
        if (userRef) {
            getTodoList();
        }
    }, [userRef]);

    useEffect(() => {
        const setTodoList = async () => {
            await setList(userRef, items);
        }
        if (userRef) {
            setTodoList();
        }
    }, [items]);

    return <div style={{}}>
        {items && items.map((item) => <ToDoItem
            key={item.id}
            item={item}>
        </ToDoItem>)}
    </div>
}

export default ToDoList;