import { contacts } from '../hooks/Storage.js';


function TopConv(props) {
    var user = contacts[props.setTop]
    return (
        <div className="settings-tray">
            <div className="friend-top">
                <img className="profile-image" src={user.img} alt=""></img>
                    <div className="text">
                        <h6>{user.displayName}</h6>
                        <h7>{user.status}</h7>
                    </div>
            </div>
        </div>
    )
}

export default TopConv;