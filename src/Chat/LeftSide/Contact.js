import { useState } from 'react';
import './Contact.css';
import { dataBaseChat } from '../hooks/Storage.js';


function Contact(props) {
    function handleClick() {
        props.choose(props.dataBase[props.id].chat)
        props.setTop(props.id)
    }


    return (
        <div className="friend-drawer" tabIndex={props.id} onClick={handleClick}>
            <span> <img className="profile-image" src={props.img} alt=""></img></span>
            <span>
                <div className="text">
                    <h6>{props.displayName}</h6>
                    <p className="text-muted">{props.status}</p>
                </div>
            </span>
            <span className="time text-muted small">{props.time}</span>
        </div>
    )
}

export default Contact;