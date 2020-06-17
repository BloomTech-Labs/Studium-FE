import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../src/redux/actions';
import Decks from './decks/Decks';
import Login from './login';
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
      {/* <button onClick={handleClick}>Get Users</button>
      
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
        } */}
      <Login/>
    </div>
  );
}

export default App;