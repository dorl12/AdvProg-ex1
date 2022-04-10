import './App.css';
import React, { Component, StrictMode } from 'react';
import {Tab} from 'react-bootstrap';
import ChatBox from './Chat/ChatBox.js';
import NavTop from './NavTop';
import $ from "jquery";
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <div>
        <NavTop />
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/chat" element={<ChatBox /> }></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
