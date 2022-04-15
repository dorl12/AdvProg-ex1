import Attach from './Conversation/Attach';
import './ChatBox.css';
import './LeftSide/LeftSide.js';
import LeftSide from './LeftSide/LeftSide.js';
import TopConv from './Conversation/TopConv';
import ChatLog from './Conversation/ChatLog';
import { useEffect, useState } from 'react';
import { dataBaseChat} from './hooks/Storage.js';
function ChatBox() {

    const [refresh, setRefresh] = useState(false);
    const [userSelect, setUserSelect] = useState('');
    const [selectedChat, setSelectedChat] = useState(dataBaseChat[0].chat);

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <LeftSide choose={setSelectedChat} />
                </div>
                <div className="col-8">
                    <TopConv />
                    <ChatLog log={selectedChat} />
                    <Attach log={selectedChat} setter={setSelectedChat} bool={refresh} setbool={setRefresh} />
                </div>
            </div>
        </div>
    )
}

export default ChatBox;