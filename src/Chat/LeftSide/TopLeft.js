import { useState, useRef } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './TopLeft.css';

function TopLeft() {
  const userRef = useRef();
  const [show, setShow] = useState(false);
  const modelOpen = () => {
    setShow(!show);
  };
  function handleSubmit(e) {
    console.log(userRef.current.value)
    e.preventDefault()
    //createContact(userRef.current.value)
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
        <span>
          <input placeholder="Search here" type="text" size='37'></input>
        </span>
        <span className='search-img'>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
          </svg>
        </span>
      </div>
    </div>
  )
}

export default TopLeft;