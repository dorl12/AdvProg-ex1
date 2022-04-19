import './App.css';
import React, { Component, StrictMode, useState } from 'react';
import { Tab } from 'react-bootstrap';
import ChatBox from './Chat/ChatBox.js';
import Login from './login/Login';
import NavTop from './NavTop';
import $ from "jquery";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {users} from './login/users.js'

function App() {

  let [login, setLogin] = useState(false);
  let [currentUser, setCurrentUser] = useState([{ name: 'userName', pass: 'password', nickName: 'nickName', profilePic: 'default.jpg' }]);
  console.log(currentUser[0].name);
  if (login == true) {
    return <ChatBox currentUser={currentUser}></ChatBox>
  } else {
    return <Login registered={setLogin} setCurrentUser={setCurrentUser}></Login>
  }

  

  return (
    <div>
      <div>
        <NavTop />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<ChatBox />}></Route>
          </Routes>
          <Routes>
            <Route path="/login" element={<Login func={setLogin} />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
