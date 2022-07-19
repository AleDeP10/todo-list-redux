import { useSelector } from 'react-redux';

import ToDoList from './components/ToDo-List/ToDo-List';
import AddItem from './components/Add-Item/Add-Item';
import Header from './components/Header/Header';
import SignIn from './components/Sign-In/Sign-in';

import './App.css';

function App() {

  const userRef = useSelector(store => store.user.userRef)

  return (
    <div className='App'>
      <SignIn>

      </SignIn>

      {userRef &&
        <>
          <Header>

          </Header>

          <AddItem>

          </AddItem>

          <div className='spacer' />
        </>
      }
      
      <ToDoList>

      </ToDoList>
    </div>
  );
}

export default App;
