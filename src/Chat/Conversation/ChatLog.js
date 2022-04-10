import './ChatLog.css';
import MsgBubble from './MsgBubble';
function ChatLog() {

    var chat1 = [
        { side: true, message: 'Hey motek!' },
        { side: false, message: 'Wazzup?' },
        { side: true, message: 'Great' },
        { side: true, message: 'how are you?' },
        { side: false, message: 'amazing' },
    ];



    const displayChat = chat1.map((msg, key) => {
        return <MsgBubble {...msg} key={key} />
        
    });


    return (
        <div className="chat-panel">
            {displayChat};
            
        </div>
    )
}

export default ChatLog;

// <MsgBubble side={true} message='Hey motek!' />
// <MsgBubble side={false} message='Wazzup?' />
// <MsgBubble side={true} message='Great' />
// <MsgBubble side={true} message='how are you?' />
// <MsgBubble side={false} message='amazing' />