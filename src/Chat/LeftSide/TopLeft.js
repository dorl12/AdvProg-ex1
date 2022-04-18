import { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Search from './Search';
import './TopLeft.css';
import './Search.js';


function TopLeft(props) {
  const userRef = useRef();
  const [show, setShow] = useState(false);

  function refresh() {
    if(props.refresh == true) {
      props.setRefresh(false);
    }
    else {
      props.setRefresh(true);
    }
  }

  const modelOpen = () => {
    setShow(!show);
  };

  function createChatlog(name) {
    var newChat = {
      sender: name,
      chat: []
    }

    props.addChat([...props.dataBase, newChat]);
  }

  function createContact(name) {

    var newContact = {
      id: props.contactList.length,
      name: name,
      img: 'default.jpg',
      displayName: name,
      status: 'Hey!'
    }

    props.addContact([...props.contactList, newContact]);
    refresh();

  }

  function handleSubmit(e) {
    e.preventDefault();
    createContact(userRef.current.value);
    createChatlog(userRef.current.value);
    modelOpen()
  }



  return (
    <div className="top-left">
      <Modal show={show}>

        <Modal.Header>
          <Modal.Title>Create Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" ref={userRef} required />
            <Button type="submit">Create</Button>
            <Button onClick={modelOpen} variant="dark">Close</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <div>
        <span><img className="profile-image" src={'person1.jpg'} alt="Profile img"></img></span>
        <span className='username'>Natasha</span>
        <span className="settings-tray--right">
        </span>
        <span className="add-button">
          <svg onClick={modelOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg>
        </span>
      </div>
      <div className='search'>
        <Search doSearch={props.doSearch} />
      </div>
    </div>
  )
}

export default TopLeft;