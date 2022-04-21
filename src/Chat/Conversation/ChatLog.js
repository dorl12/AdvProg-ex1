import React from 'react';
import './ChatLog.css';
import MsgBubble from './MsgBubble';
import { chat12, displayChat} from '../hooks/Storage.js';
import { useEffect, useState } from 'react';

var chat1;

function ChatLog(props) {
    const messages = document.getElementById('chat-panel');
    function scrollToBottom() {
        messages.scrollTop = messages.scrollHeight;
      }
      
      scrollToBottom();
    return (
        <div className="chat-panel" id='chat-panel'>
            {props.log.map((msg, key) => {
                return <MsgBubble {...msg} key={key} />
                
            })}
        </div>
    )
}

export default ChatLog;
