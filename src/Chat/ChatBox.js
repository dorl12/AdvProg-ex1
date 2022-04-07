import Attach from './Conversation/Attach';
import './ChatBox.css';
import './LeftSide/LeftSide.js';
import LeftSide from './LeftSide/LeftSide.js';
import TopConv from './Conversation/TopConv';
import ChatLog from './Conversation/ChatLog';
function ChatBox() {

    return (
        <div className="container">
            <div className="row">
                <div class="col-4">
                    <LeftSide />
                </div>
                <div className="col-8">
                    <TopConv />
                    <ChatLog />
                    <Attach />
                </div>

            </div>
        </div>
    )
}

export default ChatBox;