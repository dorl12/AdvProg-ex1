import { useState } from 'react';
import './Contact.css';
import { dataBaseChat } from '../hooks/Storage.js';


function Contact(props) {
    const [userPic, setUserPic] = useState(props.img);
    const [displayName, setDisplayName] = useState(props.displayName)
    const [status, setStatus] = useState(props.status)
    const [time, setTime] = useState(props.time)
    const [name, setName] = useState(props.name)

    function handleClick() {
        console.log(props.id)
        console.log(props.choose(dataBaseChat[props.id].chat))
        // props.choose(dataBaseChat[1].chat)

    }


    


    return (
        <div className="friend-drawer" onClick={handleClick}>
            <span> <img className="profile-image" src={userPic} alt=""></img></span>
            <span>
                <div className="text">
                    <h6>{displayName}</h6>
                    <p className="text-muted">{status}</p>
                </div>
            </span>
            <span className="time text-muted small">13:21</span>
        </div>
    )
}

export default Contact;