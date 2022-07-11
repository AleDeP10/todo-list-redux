import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoList from './components/ToDo-List/ToDo-List';
import AddItem from './components/Add-Item/Add-Item';

import {
  setItems,
} from './redux/item';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const items = useSelector(store => store.items);

  useEffect(() => {
    const copy = [...items];
    copy.push({
      text: 'Introduce the AddItem form',
      done: false,
      id: Math.random()
    });
    dispatch(setItems(copy));
  }, []);

  return (
    <div className='App'>
      <h3 className='title'>TODO LIST</h3>
      <AddItem>

      </AddItem>
      <div className='spacer' />
      <ToDoList 
        items={items}>

      </ToDoList>
    </div>
  );
}

export default App;
