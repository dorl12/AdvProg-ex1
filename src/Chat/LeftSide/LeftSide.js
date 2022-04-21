import React from 'react';
import Contact from "./Contact";
import TopLeft from "./TopLeft";
import './LeftSide.css';
import { ListGroup } from "react-bootstrap";
import { useState } from "react";

function LeftSide(props) {

    // const contactList = props.contactResult.map((contact, key) => {
    //     return <Contact {...contact} key={key} 
    //     choose={props.choose} setTop={props.setTop}
    //     dataBase={props.dataBase} setDataBase={props.setDataBase} />
    // });
    //console.log(props.dataBase);

    const contactList = props.contactResult.map((contact, key) => {
        return <Contact {...contact} key={key} 
        choose={props.choose} setCurrentActiveUserChat={props.setCurrentActiveUserChat}
        dataBase={props.dataBase} setDataBase={props.setDataBase}
        setIsJustLoggedIn={props.setIsJustLoggedIn} />
    });



    return (
        <div className="left-side">
            <div className="left-side-top">
                <TopLeft currentUser={props.currentUser}
                contactList={props.contactList} addContact={props.addContact}
                dataBase={props.dataBase} setDataBase={props.setDataBase}
                doSearch={props.doSearch} refresh={props.refresh} setRefresh={props.setRefresh} />
            </div>
            <div className="left-side-contacts">

            <ListGroup variant='flush'>
            {contactList}
            </ListGroup>
                

            </div>
        </div>


    )
}

export default LeftSide;