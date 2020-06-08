import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../src/redux/actions';
import Decks from './decks/Decks';
import './App.css';


function App() {
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()

  const [userList, setUserList] = useState([])

  useEffect(() => {
    dispatch(getUsers())
    setUserList(users)
  }, [])

  const handleClick = e => {
    setUserList(users)
  }

  return (
    <div className="App">
      <h2>Studium Front-End</h2>
      <button onClick={handleClick}>Get Users</button>
      
        {
          userList.length > 0
            ? userList.map(user => {
                return (
                  <div>
                    <p>{user.first_name} {user.last_name}</p>
                    <p>{user.email}</p>
                  </div>
                )
              })

            : null
        }
        <Decks/>
      
    </div>
  );
}

export default App;