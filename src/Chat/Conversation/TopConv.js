import React from 'react';
import { contacts } from '../hooks/Storage.js';

function TopConv(props) {
    var j;
    var user;

    if (props.contactList.findIndex((user) => { return user.displayName == props.currentActiveUserChat }) != -1) {
        j = props.contactList.findIndex((user) => { return user.displayName == props.currentActiveUserChat });
        user = props.contactList[j];
    }
    else {
        j = contacts.findIndex((user) => { return user.displayName == props.currentActiveUserChat});
        user = contacts[j];
    }

    return (
        <div className="settings-tray">
            <div className="friend-top">
                <img className="profile-image" src={user.img} alt=""></img>
                    <div className="text">
                        <h6>{user.displayName}</h6>
                        <span>{user.status}</span>
                    </div>
            </div>
        </div>
    )
}

export default TopConv;