import React from 'react';
import Attach from './Conversation/Attach';
import './ChatBox.css';
import './LeftSide/LeftSide.js';
import LeftSide from './LeftSide/LeftSide.js';
import TopConv from './Conversation/TopConv';
import ChatLog from './Conversation/ChatLog';
import { useEffect, useState } from 'react';
import { contacts, dataBaseChat, data} from './hooks/Storage.js';
function ChatBox(props) {
    var indexContacts = contacts.findIndex((user) => { return user.name == props.currentUser});
    var indexData = data.findIndex((user) => { return user.name == props.currentUser});

    const [refresh, setRefresh] = useState(false);
    const [userSelect, setUserSelect] = useState(0);
    const [contactList, setContactList] = useState(contacts);
    const [dataBase, setDataBase] = useState(dataBaseChat);
    const [selectedChat, setSelectedChat] = useState(dataBase[0].chat); 
    const [contactResult, setContactResult] = useState(contactList);

    const doSearch = function(query){
        setContactResult(contactList.filter((contact) => contact.name.includes(query)));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4">
                    <LeftSide choose={setSelectedChat} 
                     contactList={contactList} addContact={setContactList}
                     dataBase={dataBase} addChat={setDataBase}
                     doSearch={doSearch} contactResult={contactResult}
                     refresh={refresh} setRefresh={setRefresh} />
                </div>
                <div className="col-8">
                    <TopConv contactList={contactList} />
                    <ChatLog log={selectedChat} />
                    <Attach log={selectedChat} setLog={setSelectedChat} bool={refresh} setbool={setRefresh} />
                </div>
            </div>
        </div>
    )
}
// function ChatBox(props) {
//     var indexContacts = contacts.findIndex((user) => { return user.name == props.currentUser});
//     var indexData = data.findIndex((user) => { return user.name == props.currentUser});

//     const [refresh, setRefresh] = useState(false);
//     const [userSelect, setUserSelect] = useState(0);
//     const [contactList, setContactList] = useState(contacts);
//     const [dataBase, setDataBase] = useState(dataBaseChat);
//     const [selectedChat, setSelectedChat] = useState(dataBase[0].chat); 
//     const [contactResult, setContactResult] = useState(contactList);

//     const doSearch = function(query){
//         setContactResult(contactList.filter((contact) => contact.name.includes(query)));
//     }

//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-4">
//                     <LeftSide choose={setSelectedChat} 
//                      contactList={contactList} addContact={setContactList}
//                      dataBase={dataBase} addChat={setDataBase}
//                      doSearch={doSearch} contactResult={contactResult}
//                      refresh={refresh} setRefresh={setRefresh} />
//                 </div>
//                 <div className="col-8">
//                     <TopConv contactList={contactList} />
//                     <ChatLog log={selectedChat} />
//                     <Attach log={selectedChat} setLog={setSelectedChat} bool={refresh} setbool={setRefresh} />
//                 </div>
//             </div>
//         </div>
//     )
// }

export default ChatBox;