import React from 'react';
import './Contact.css';

function Contact(props) {
    var i;
     for (let j = 0; j < props.dataBase.length ; j++) {
        if (props.dataBase[j].sender === props.displayName) {
            i = j;

        }
    }
    function handleClick() {
        props.choose(props.dataBase[i].chat);
        props.setCurrentActiveUserChat(props.displayName);
        props.setIsJustLoggedIn(false);
    }

    var index = props.dataBase[i].chat.length;

    try{
    if (props.dataBase[i].chat[index-1].type === 'text'){
    var lastMessage = props.dataBase[i].chat[index-1].contain;
    var lastMessageTime = props.dataBase[i].chat[index-1].time;
    }
    } catch {
        lastMessage = 'Start a Conversation!';
    }
    if (props.dataBase[i].chat[index-1].type != 'text'){
        lastMessage = 'Attached File';
        lastMessageTime = props.dataBase[i].chat[index-1].time;
    }

    return (
        <div className="friend-drawer" tabIndex='0' onClick={handleClick}>
            <span> <img className="profile-image" src={props.img} alt=""></img></span>
            <span>
                <div className="text">
                    <h6>{props.displayName}</h6>
                    <p className="text-muted">{lastMessage}</p>
                </div>
            </span>
            <p className="text-muted">{lastMessageTime}</p>
        </div>
    )
}

export default Contact;