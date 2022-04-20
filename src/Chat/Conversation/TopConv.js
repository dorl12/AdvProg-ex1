import React from 'react';

function TopConv(props) {
    var user = props.contactList[0]
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