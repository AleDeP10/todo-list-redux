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
  console.log({ items });

  useEffect(() => {
    const copy = [...items];
    copy.push({
      text: "Introduce the form",
      done: false,
      id: Math.random()*6
    });
    dispatch(setItems(copy));
  }, []);

  return (
    <div className="App">
      <AddItem>

      </AddItem>
      <ToDoList 
        items={items}>

      </ToDoList>
    </div>
  );
}

export default App;
