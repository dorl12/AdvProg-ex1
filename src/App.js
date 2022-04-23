import './App.css';
import React, { useState } from 'react';
import ChatBox from './Chat/ChatBox.js';
import Login from './login/Login';


function App() {
  let [state, setState] = useState(false);
  let [currentUser, setCurrentUser] = useState('')
  if (state == true) {
    return <ChatBox currentUser={currentUser}></ChatBox>
  } else {
    return <Login registered={setState} setCurrentUser={setCurrentUser}></Login>
  }
}

export default App;
