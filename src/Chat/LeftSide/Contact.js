import React from 'react';
import { useState } from 'react';
import './Contact.css';

function Contact(props) {
    var i;
     for (let j = 0; j < props.dataBase.length ; j++) {
        if (props.dataBase[j].sender == props.displayName) {
            i = j;

        }
    }
    
    function handleClick() {
        props.choose(props.dataBase[i].chat);
        // props.setTop(props.id);
    }

    var index = props.dataBase[i].chat.length;
    var lastMessage = props.dataBase[i].chat[index-1].contain;
    console.log(lastMessage);


    return (
        <div className="friend-drawer" tabIndex='0' onClick={handleClick}>
            <span> <img className="profile-image" src={props.img} alt=""></img></span>
            <span>
                <div className="text">
                    <h6>{props.displayName}</h6>
                    <p className="text-muted">{lastMessage}</p>
                </div>
            </span>
            <p className="text-muted">{props.time}</p>
        </div>
    )
}

export default Contact;