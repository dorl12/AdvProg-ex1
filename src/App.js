import './App.css';
import React, { Component, StrictMode } from 'react';
import {Tab} from 'react-bootstrap';
import ChatBox from './Chat/ChatBox.js';
import NavTop from './NavTop';


function App() {
  return (
    <div>
    <div>
      <NavTop />
      </div>
      <div>
      <ChatBox />
    </div>
    </div>

  );
}

export default App;
