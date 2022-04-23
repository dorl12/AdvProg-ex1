import React from 'react';
import './ChatLog.css';
import MsgBubble from './MsgBubble';

function ChatLog(props) {

    var log = props.log;
    var isJustLoggedIn = props.isJustLoggedIn;
    try {
    const messages = document.getElementById('chat-panel');
    function scrollToBottom() {
        messages.scrollTop = messages.scrollHeight;
      }
      scrollToBottom();
    } catch {

    }
    return (
        <div className="chat-panel" id='chat-panel'>
        {isJustLoggedIn? '' : log.map((msg, key) => {
            return <MsgBubble {...msg} key={key} />
            
        }) }  
        </div>
    )
}

export default ChatLog;
