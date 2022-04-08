import { useState } from 'react';
import './Contact.css';

function Contact(props) {
    const [userPic, setUserPic] = useState(props.img);
    const [displayName, setDisplayName] = useState(props.displayName)
    const [status, setStatus] = useState(props.status)
    const [time, setTime] = useState(props.time)
    


    return (
        <div className="friend-drawer">
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