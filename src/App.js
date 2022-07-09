import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoList from './components/ToDo-List/ToDo-List';

import logo from './logo.svg';
import './App.css';

function App() {
  const [items, setItems] = useState([{
    text: "App with state",
    done: true
  },{
    text: "App with redux",
    done: false
  }
])

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
      {console.log({items})}
      a<ToDoList items={items}>a

      </ToDoList>
    </div>
  );
}

export default App;
