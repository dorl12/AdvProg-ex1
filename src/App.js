import './App.css';
import React, { Component, StrictMode, useState } from 'react';
import { Tab } from 'react-bootstrap';
import ChatBox from './Chat/ChatBox.js';
import Login from './login/Login';
import NavTop from './NavTop';
import $ from "jquery";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  // let [state, setState] = useState(false);
  // if(state==true){
  //   return <ChatBox></ChatBox>
  // }else{
  //   return <Login func={setState}></Login>
  // }
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
              <Route path="/login" element={<Login />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>

    );
}

export default App;
