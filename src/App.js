import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoList from './components/ToDo-List/ToDo-List';
import AddItem from './components/Add-Item/Add-Item';

import {
  setItems,
} from './redux/item';

import './App.css';
import Header from './components/Header/header';
import SignIn from './components/Sign-In/Sign-in';

function App() {
  const dispatch = useDispatch();

  const items = useSelector(store => store.items);

  const [logged, setLogged] = useState(false);

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
      <Header>
      </Header>
      {logged && 
      <>
      <AddItem>

      </AddItem>
      <div className='spacer' />
      <ToDoList 
        items={items}>

      </ToDoList>
      </>}
      {!logged && <SignIn></SignIn>}
    </div>
  );
}

export default App;
