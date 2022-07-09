import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoList from './components/ToDo-List/ToDo-List';

import {
  getItemsRequest,
  getItemsSuccess,
  getItemsFailed
} from './redux/item';

import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const items = useSelector(store => store.items);
  console.log({ items });

  useEffect(() => {
    const copy = [...items];
    copy.push({
      text: "Complete the demo",
      done: false
    });
    dispatch(getItemsSuccess(copy));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {console.log({ items })}
      a<ToDoList items={items}>a

      </ToDoList>
    </div>
  );
}

export default App;
